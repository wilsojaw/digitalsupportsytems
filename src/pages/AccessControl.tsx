import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Smartphone, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Intro Hero Section ─── */
const AccessControlHero = () => (
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
          <Shield className="h-4 w-4" />
          Access Control
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
          Know who's coming in.{" "}
          <span className="text-muted-foreground">Always.</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light max-w-2xl">
          Access control replaces traditional keys with smart, network-based card readers — giving you complete visibility and control over every door in your facility, from anywhere.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid sm:grid-cols-3 gap-6 max-w-3xl mt-12"
      >
        {[
          { icon: Lock, title: "Smart Locks", desc: "IP-based card readers at every door — no more lost keys or rekeying costs." },
          { icon: Smartphone, title: "Mobile Credentials", desc: "Employees badge in with their phone. Grant or revoke access instantly." },
          { icon: Cloud, title: "Cloud Managed", desc: "Monitor every door from a single dashboard. Full audit logs included." },
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

/* ─── Estimator Components ─── */
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

/* ─── Estimator Wizard ─── */
const Estimator = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    rooms: 1,
    ext: null as boolean | null,
    extN: 1,
    dbl: null as boolean | null,
    dblN: 1,
  });

  const go = (upd = {}, skip = 1) => {
    setData((p) => ({ ...p, ...upd }));
    setStep((s) => s + skip);
  };

  const r = data.rooms;
  const extN = data.ext ? data.extN : 0;
  const dblN = data.dbl ? data.dblN : 0;
  const singles = Math.max(0, r - dblN);

  const btnClass = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed";
  const yesnoClass = "rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors";
  const stepLabel = step < 6 ? `Step ${step + 1} of 6` : "Complete ✓";

  const slides = [
    /* 0 – Welcome */
    <div key="w" className="text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Shield className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-3">Access Control Estimator</h2>
      <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-8 leading-relaxed">
        Answer a few quick questions and we'll outline exactly what your facility needs.
      </p>
      <button onClick={() => go()} className={btnClass}>
        Get Started <ArrowRight className="h-4 w-4" />
      </button>
    </div>,

    /* 1 – Room count */
    <div key="r" className="text-center">
      <h2 className="text-lg font-semibold mb-2">How many rooms need card readers?</h2>
      <p className="text-muted-foreground text-xs mb-2">Include every door that needs controlled access.</p>
      <Counter val={r} onChange={(v) => setData((p) => ({ ...p, rooms: v }))} />
      <button onClick={() => go()} disabled={r < 1} className={btnClass}>Next →</button>
    </div>,

    /* 2 – External doors? */
    <div key="e" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Are any doors external?</h2>
      <p className="text-muted-foreground text-xs mb-6">Doors that lead directly outside the building.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => go({ ext: true })} className={yesnoClass}>Yes</button>
        <button onClick={() => go({ ext: false, extN: 0 }, 2)} className={yesnoClass}>No</button>
      </div>
    </div>,

    /* 3 – External count */
    <div key="en" className="text-center">
      <h2 className="text-lg font-semibold mb-2">How many external doors?</h2>
      <p className="text-muted-foreground text-xs mb-2">Enter the number that lead directly outside.</p>
      <Counter val={data.extN} onChange={(v) => setData((p) => ({ ...p, extN: v }))} />
      <button onClick={() => go()} className={btnClass}>Next →</button>
    </div>,

    /* 4 – Double doors? */
    <div key="d" className="text-center">
      <h2 className="text-lg font-semibold mb-2">Are any doors double doors?</h2>
      <p className="text-muted-foreground text-xs mb-6">Double doors need mag locks, motion sensors & REX sensors.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => go({ dbl: true })} className={yesnoClass}>Yes</button>
        <button onClick={() => go({ dbl: false, dblN: 0 }, 2)} className={yesnoClass}>No</button>
      </div>
    </div>,

    /* 5 – Double door count */
    <div key="dn" className="text-center">
      <h2 className="text-lg font-semibold mb-2">How many double doors?</h2>
      <p className="text-muted-foreground text-xs mb-2">Each set needs its own mag lock, motion sensor & REX.</p>
      <Counter val={data.dblN} onChange={(v) => setData((p) => ({ ...p, dblN: v }))} />
      <button onClick={() => go()} className={btnClass}>See My Results →</button>
    </div>,

    /* 6 – Results */
    <div key="s">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold tracking-tight mb-4">Your Installation Needs</h2>
        <div className="flex gap-3 justify-center flex-wrap">
          {[
            { l: "Card Readers", v: r },
            { l: "External Doors", v: extN },
            { l: "Double Doors", v: dblN },
          ].map(({ l, v }) => (
            <div key={l} className="bg-card border border-border rounded-xl px-4 py-3 text-center min-w-[90px]">
              <div className="text-2xl font-bold text-foreground tabular-nums">{v}</div>
              <div className="text-[10px] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <ResultRow icon="🔌" highlighted label={`Ethernet Wiring — ${r} run${r !== 1 ? "s" : ""}`} detail="Cat6 ethernet from server room to each door location for IP-based card reader communication." />
      <ResultRow icon="🪪" highlighted label={`Card Readers & Cables — ${r} unit${r !== 1 ? "s" : ""}`} detail="ISONAS IP card readers with installation hardware and cables at each secured door." />
      {singles > 0 && <ResultRow icon="⚡" highlighted={false} label={`Electric Strikes — ${singles} unit${singles !== 1 ? "s" : ""}`} detail="Single doors require an electric strike for electronic locking and release." />}
      {dblN > 0 && <ResultRow icon="🔒" highlighted={false} label={`Mag Locks + Motion + REX — ${dblN} set${dblN !== 1 ? "s" : ""}`} detail="Double doors require magnetic locks, overhead motion sensors, and Request-to-Exit sensors on both sides." />}
      <ResultRow icon="☁️" highlighted label={`Cloud License — ${r} reader${r !== 1 ? "s" : ""}`} detail="Annual per-reader cloud license. Includes mobile credentials, remote management, and full audit logs." />
      <ResultRow icon="🛠️" highlighted={false} label="Annual Maintenance (Optional)" detail="Covers preventive maintenance, firmware updates, and priority support." />

      <div className="mt-6 p-5 bg-primary/5 border border-primary/15 rounded-2xl text-center">
        <p className="text-muted-foreground text-xs mb-3">Ready for a formal quote based on your facility?</p>
        <button className={`${btnClass} w-full justify-center`}>
          Request a Custom Quote <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <button
        onClick={() => { setStep(0); setData({ rooms: 1, ext: null, extN: 1, dbl: null, dblN: 1 }); }}
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
                <span className="text-muted-foreground text-[11px] font-medium tracking-wider uppercase">Access Control</span>
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
        <p className="text-lg text-muted-foreground">From consultation to cloud-managed security in four steps.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          { n: "01", title: "Site Assessment", desc: "We survey your facility to map every door, wiring path, and security requirement." },
          { n: "02", title: "System Design", desc: "A custom plan with readers, locks, and network layout — tailored to your building." },
          { n: "03", title: "Installation", desc: "Our team handles wiring, mounting, and configuration. Minimal disruption to your day." },
          { n: "04", title: "Go Live", desc: "Cloud dashboard is activated, credentials are issued, and you're in full control." },
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
const AccessControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AccessControlHero />
      <Estimator />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default AccessControl;
