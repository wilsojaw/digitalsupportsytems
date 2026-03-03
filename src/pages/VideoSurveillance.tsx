import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Eye, HardDrive, Wifi, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Shared Wizard Components ─── */
const Counter = ({ val, onChange }: { val: number; onChange: (v: number) => void }) => (
  <div className="flex items-center justify-center gap-5 my-6">
    <button
      onClick={() => onChange(Math.max(1, val - 1))}
      className="w-11 h-11 rounded-full border border-border bg-card text-foreground text-xl flex items-center justify-center hover:bg-muted transition-colors"
    >
      −
    </button>
    <span className="text-5xl font-bold text-foreground min-w-[64px] text-center tabular-nums">{val}</span>
    <button
      onClick={() => onChange(val + 1)}
      className="w-11 h-11 rounded-full border border-border bg-card text-foreground text-xl flex items-center justify-center hover:bg-muted transition-colors"
    >
      +
    </button>
  </div>
);

const ResultRow = ({ icon, label, detail, highlighted }: { icon: string; label: string; detail: string; highlighted: boolean }) => (
  <div className={`flex gap-3 items-start p-4 mb-2 rounded-xl border ${highlighted ? "bg-primary/5 border-primary/20" : "bg-card border-border"}`}>
    <span className="text-lg mt-0.5 shrink-0">{icon}</span>
    <div>
      <div className={`font-semibold text-sm mb-1 ${highlighted ? "text-primary" : "text-foreground"}`}>{label}</div>
      <div className="text-muted-foreground text-xs leading-relaxed">{detail}</div>
    </div>
  </div>
);

/* ─── NVR sizing helper ─── */
const nvrSize = (n: number) => {
  if (n <= 4) return "4-Channel NVR";
  if (n <= 8) return "8-Channel NVR";
  if (n <= 16) return "16-Channel NVR";
  return "Enterprise NVR System";
};

const storageLabel = (retention: number, cameras: number) => {
  if (retention === 7) return "Built-in NVR Storage";
  if (retention === 30) return `${Math.ceil(cameras / 4) * 2}TB HDD Expansion`;
  return `${Math.ceil(cameras / 4) * 4}TB NAS / RAID Storage`;
};

const storageDetail = (retention: number) => {
  if (retention === 7) return "Standard NVR internal drive — sufficient for a 7-day rolling archive at 1080p.";
  if (retention === 30) return "Extended HDD storage for 30-day continuous recording at 1080p across all cameras.";
  return "NAS or RAID array required for 90-day retention. Provides redundancy and protects against drive failure.";
};

/* ─── Wizard ─── */
const Estimator = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    cameras: 1,
    location: null as "indoor" | "outdoor" | "both" | null,
    nightVision: null as boolean | null,
    ptz: null as boolean | null,
    retention: null as 7 | 30 | 90 | null,
    remote: null as boolean | null,
  });

  const go = (upd = {}, skip = 1) => {
    setData((p) => ({ ...p, ...upd }));
    setStep((s) => s + skip);
  };

  const c = data.cameras;
  const isOutdoor = data.location === "outdoor" || data.location === "both";

  const btnClass = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed";
  const choiceClass = "rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors";

  // 8 slides: 0=welcome, 1–6=questions, 7=results
  const totalSteps = 7;
  const stepLabel = step === 0 ? "" : step < totalSteps ? `Step ${step} of 6` : "Complete ✓";

  const slides = [
    /* 0 – Welcome */
    <div key="w" className="text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Camera className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-3">Surveillance Needs Estimator</h2>
      <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-8 leading-relaxed">
        Answer 6 quick questions and we'll outline exactly what your surveillance system requires.
      </p>
      <button onClick={() => go()} className={btnClass}>
        Get Started <ArrowRight className="h-4 w-4" />
      </button>
    </div>,

    /* 1 – Camera count */
    <div key="cam" className="text-center">
      <h2 className="text-lg font-semibold mb-2">How many cameras do you need?</h2>
      <p className="text-muted-foreground text-xs mb-2">Count every location you want coverage — entrances, hallways, parking, etc.</p>
      <Counter val={c} onChange={(v) => setData((p) => ({ ...p, cameras: v }))} />
      <button onClick={() => go()} disabled={c < 1} className={btnClass}>Next →</button>
    </div>,

    /* 2 – Indoor / Outdoor / Both */
    <div key="loc" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Where will the cameras be installed?</h2>
      <p className="text-muted-foreground text-xs mb-6">Outdoor cameras require weatherproof housings and UV-rated cabling.</p>
      <div className="flex flex-col gap-3 items-center">
        <button onClick={() => go({ location: "indoor" })} className={choiceClass}>Indoor only</button>
        <button onClick={() => go({ location: "outdoor" })} className={choiceClass}>Outdoor only</button>
        <button onClick={() => go({ location: "both" })} className={choiceClass}>Both indoor & outdoor</button>
      </div>
    </div>,

    /* 3 – Night vision */
    <div key="nv" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Do you need night vision?</h2>
      <p className="text-muted-foreground text-xs mb-6">Required for any areas without reliable lighting after dark — parking lots, hallways, entry points.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => go({ nightVision: true })} className={choiceClass}>Yes</button>
        <button onClick={() => go({ nightVision: false })} className={choiceClass}>No</button>
      </div>
    </div>,

    /* 4 – PTZ */
    <div key="ptz" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Do you need pan-tilt-zoom (PTZ) cameras?</h2>
      <p className="text-muted-foreground text-xs mb-6">PTZ cameras cover wide open areas like parking lots, courtyards, or large lobbies — one camera can monitor a large zone.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => go({ ptz: true })} className={choiceClass}>Yes</button>
        <button onClick={() => go({ ptz: false })} className={choiceClass}>No</button>
      </div>
    </div>,

    /* 5 – Retention */
    <div key="ret" className="text-center">
      <h2 className="text-lg font-semibold mb-2">How long do you need to store footage?</h2>
      <p className="text-muted-foreground text-xs mb-6">Longer retention requires more storage. Most facilities use 30 days as a baseline.</p>
      <div className="flex flex-col gap-3 items-center">
        <button onClick={() => go({ retention: 7 })} className={choiceClass}>7 days</button>
        <button onClick={() => go({ retention: 30 })} className={choiceClass}>30 days <span className="text-muted-foreground text-xs">(recommended)</span></button>
        <button onClick={() => go({ retention: 90 })} className={choiceClass}>90 days</button>
      </div>
    </div>,

    /* 6 – Remote access */
    <div key="rem" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Do you need remote viewing?</h2>
      <p className="text-muted-foreground text-xs mb-6">View live and recorded footage from your phone, tablet, or computer — from anywhere.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => go({ remote: true })} className={btnClass}>Yes — See My Results →</button>
        <button onClick={() => go({ remote: false })} className={choiceClass}>No</button>
      </div>
    </div>,

    /* 7 – Results */
    <div key="res">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold tracking-tight mb-4">Your System Needs</h2>
        <div className="flex gap-3 justify-center flex-wrap">
          {[
            { l: "Cameras", v: c },
            { l: "Storage", v: `${data.retention ?? "—"}d` },
            { l: "Remote", v: data.remote ? "Yes" : "No" },
          ].map(({ l, v }) => (
            <div key={l} className="bg-card border border-border rounded-xl px-4 py-3 text-center min-w-[80px]">
              <div className="text-2xl font-bold text-foreground tabular-nums">{v}</div>
              <div className="text-[10px] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <ResultRow
        icon="📷"
        highlighted
        label={`IP Cameras — ${c} unit${c !== 1 ? "s" : ""}`}
        detail={`${c} HD IP camera${c !== 1 ? "s" : ""} with mounting hardware. ${isOutdoor ? "Includes weatherproof IP66-rated housings for outdoor units." : "Indoor dome cameras for ceiling or wall mount."}`}
      />
      <ResultRow
        icon="🔌"
        highlighted
        label={`PoE Ethernet Runs — ${c} cable${c !== 1 ? "s" : ""}`}
        detail="Cat6 ethernet from the NVR to each camera location. Power-over-Ethernet (PoE) eliminates the need for separate power wiring at each camera."
      />
      {data.nightVision && (
        <ResultRow
          icon="🌙"
          highlighted={false}
          label="IR Night Vision"
          detail="Cameras with built-in infrared LEDs provide clear footage in complete darkness — up to 100ft range depending on the model."
        />
      )}
      {data.ptz && (
        <ResultRow
          icon="🔭"
          highlighted={false}
          label="PTZ Camera(s)"
          detail="Pan-tilt-zoom cameras for wide area coverage. Can be remotely controlled to track movement and zoom into specific areas of interest."
        />
      )}
      <ResultRow
        icon="🖥️"
        highlighted
        label={nvrSize(c)}
        detail={`Network Video Recorder sized for ${c} camera${c !== 1 ? "s" : ""}. Manages recording schedules, motion detection triggers, and local playback.`}
      />
      <ResultRow
        icon="💾"
        highlighted={false}
        label={data.retention ? storageLabel(data.retention, c) : "Storage TBD"}
        detail={data.retention ? storageDetail(data.retention) : ""}
      />
      {data.remote && (
        <ResultRow
          icon="📱"
          highlighted={false}
          label="Remote Viewing App & License"
          detail="Securely view live and recorded footage from any device. Includes push notifications for motion alerts and multi-site support."
        />
      )}
      <ResultRow
        icon="🛠️"
        highlighted={false}
        label="Annual Maintenance (Optional)"
        detail="Preventive maintenance, firmware updates, camera cleaning, and priority support to keep your system running reliably."
      />

      <div className="mt-6 p-5 bg-primary/5 border border-primary/15 rounded-2xl text-center">
        <p className="text-muted-foreground text-xs mb-3">Ready for a formal quote based on your facility?</p>
        <a
          href="/#contact"
          className={`${btnClass} w-full justify-center`}
        >
          Request a Custom Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <button
        onClick={() => {
          setStep(0);
          setData({ cameras: 1, location: null, nightVision: null, ptz: null, retention: null, remote: null });
        }}
        className="w-full mt-3 py-2.5 text-xs text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
      >
        ← Start Over
      </button>
    </div>,
  ];

  const cur = Math.min(step, slides.length - 1);
  const prog = Math.min((step / (slides.length - 1)) * 100, 100);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            See what you need.{" "}
            <span className="text-muted-foreground">In 60 seconds.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our estimator walks you through the specifics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_hsl(142_76%_46%)]" />
                <span className="text-muted-foreground text-[11px] font-medium tracking-wider uppercase">Video Surveillance</span>
              </div>
              <span className="text-muted-foreground text-[11px]">{stepLabel}</span>
            </div>
            <div className="h-1 bg-muted rounded-full mb-6">
              <div
                className="h-full bg-primary rounded-full transition-all duration-400 ease-out"
                style={{ width: `${prog}%` }}
              />
            </div>
            <div key={step} className="min-h-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300">
              {slides[cur]}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Camera className="h-4 w-4" />
          Video Surveillance
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
          Know what's happening.{" "}
          <span className="text-muted-foreground">Always.</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light max-w-2xl">
          Modern IP-based surveillance systems give you full visibility over your facility — live monitoring, recorded footage, and remote access from any device, all managed from a single platform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid sm:grid-cols-3 gap-6 max-w-3xl mt-12"
      >
        {[
          { icon: Eye, title: "Live Monitoring", desc: "Watch every camera in real time from a single dashboard or mobile app — on-site or remotely." },
          { icon: HardDrive, title: "Recorded Footage", desc: "Continuous or motion-triggered recording with retention from 7 to 90+ days depending on your needs." },
          { icon: Wifi, title: "Remote Access", desc: "Securely view live and recorded footage from your phone, tablet, or computer from anywhere." },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl bg-card border border-border p-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── How It Works ─── */
const HowItWorks = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          How it works.
        </h2>
        <p className="text-lg text-muted-foreground">From site survey to live system in four steps.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          { n: "01", title: "Site Survey", desc: "We walk your facility to map camera placement, identify blind spots, and plan cable routes." },
          { n: "02", title: "System Design", desc: "A custom plan with camera types, NVR sizing, storage, and network layout — tailored to your building." },
          { n: "03", title: "Installation", desc: "Our team handles all cabling, mounting, and configuration. Minimal disruption to your operations." },
          { n: "04", title: "Go Live", desc: "System is tested, remote access is configured, and your team is trained on playback and monitoring." },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-primary/20 mb-4">{s.n}</div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Page ─── */
const VideoSurveillance = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Estimator />
    <HowItWorks />
    <Footer />
  </div>
);

export default VideoSurveillance;
