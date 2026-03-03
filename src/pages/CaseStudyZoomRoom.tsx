import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, Video, Camera, Mic, Monitor, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const components = [
  {
    icon: Camera,
    title: "Video Capture & Displays",
    items: [
      "Poly E70 4K dual-lens camera with AI-driven speaker tracking and automatic framing",
      "Dual 55\" displays — one for gallery view, one for shared content and presentations",
    ],
  },
  {
    icon: Mic,
    title: "Audio System (Dante-Based)",
    items: [
      "Shure MCA902 microphone with beamforming pickup for clarity",
      "Shure MXN-C Dante-enabled network speaker for even audio distribution",
      "Shure P300 IntelliMix processor — echo cancellation, noise reduction, and Dante routing",
    ],
  },
  {
    icon: Monitor,
    title: "Compute & Control",
    items: [
      "Dedicated Zoom Room PC interfacing with camera, DSP, and displays",
      "iPad controller for one-touch meeting start, scheduling, and camera control",
      "Echo Dot for Alexa voice control and smart environmental integration",
    ],
  },
];

const principles = [
  { title: "Simplicity for End Users", desc: "One-touch start via iPad and Alexa voice integration." },
  { title: "Enterprise Audio Quality", desc: "Shure IntelliMix DSP ensures professional-grade sound." },
  { title: "AI-Driven Video", desc: "Poly E70 automatically frames and tracks active speakers." },
  { title: "Scalable AV-over-IP", desc: "Dante network architecture allows easy future expansion." },
  { title: "Professional Presentation", desc: "Dual 55\" displays support seamless hybrid collaboration." },
];

const impact = [
  { title: "Professional presence", desc: "Strengthens digital engagement" },
  { title: "Clear audio", desc: "Reduces meeting fatigue" },
  { title: "Reliable connectivity", desc: "Fewer technical disruptions" },
  { title: "Scalable architecture", desc: "Future-ready investment" },
];

const CaseStudyZoomRoom = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              All Case Studies
            </Link>
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                AV Integration · Voice Control
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Voice-Controlled Zoom Room
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                A network-centric AV-over-IP Zoom Room built around Dante-enabled audio, dual displays, and professional-grade camera capture — controlled by voice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-secondary overflow-hidden aspect-[16/7] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">Hero image coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight mb-6">System Architecture Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The system is a network-centric AV-over-IP Zoom Room design that leverages the best-in-class Dante-enabled audio processing ecosystem by Shure, alongside a dual-display visual presentation setup, and professional-grade camera capture.
                </p>
                <p>
                  The architecture leverages a structured network backbone: a central switch connecting the microphone, speaker, DSP, and Zoom PC to provide a clean, scalable AV-over-IP design that reduces analog cabling and provides enterprise-level reliability.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="font-medium text-foreground">Oakwood University Church</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Huntsville, Alabama</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Platform</p>
                    <p className="font-medium text-foreground">Zoom Rooms / Shure Dante</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Scope</p>
                    <p className="font-medium text-foreground">AV-over-IP Conference Room</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="pb-24 bg-muted/50">
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-10">Core Components</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {components.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-card border border-border p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <block.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-10">Design Philosophy</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold mb-1">{p.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Video Demonstration</h2>
              <p className="text-muted-foreground text-lg mb-8">See the Zoom Room in action at Oakwood University Church.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-secondary border border-border overflow-hidden aspect-video relative">
              {videoSrc ? (
                <video ref={videoRef} src={videoSrc} controls className="w-full h-full object-contain bg-black" autoPlay />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground mb-1">Video Demonstration</p>
                    <p className="text-sm text-muted-foreground mb-6">Upload a video file to see it here</p>
                    <label className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer">
                      <Play className="h-4 w-4" />
                      Upload Video
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setVideoSrc(URL.createObjectURL(file));
                        }}
                      />
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
            <p className="text-xs text-muted-foreground text-center mt-3">Oakwood University Church Zoom Room Demonstration</p>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-10 sm:p-14">
              <h2 className="text-3xl font-bold tracking-tight mb-5">Business Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Oakwood University Church now operates a fully integrated Zoom Room delivering enterprise-grade hybrid meeting capabilities with broadcast-quality audio and professional visual presence — all controllable by voice.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View more case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyZoomRoom;
