import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, TabletSmartphone, Layout, Server, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const challenges = [
  "Double-booked classrooms",
  "Lack of real-time visibility",
  "Manual scheduling conflicts",
  "Outdated paper-based systems",
  "No centralized management",
  "Poor user adoption due to complex interfaces",
];

const solutionBlocks = [
  {
    icon: TabletSmartphone,
    title: "Native iPad & Android App",
    items: ["Built with SwiftUI and Jetpack Compose", "Optimized for kiosk mode", "Touch-friendly with color-coded status", "Real-time availability display", "Instant booking capability"],
  },
  {
    icon: Layout,
    title: "Cloud Admin Portal",
    items: ["Next.js + React web dashboard", "Secure authentication layer", "Event management & reporting", "Multi-room configuration", "User role management"],
  },
  {
    icon: Server,
    title: "Backend Infrastructure",
    items: ["Node.js API with REST architecture", "MySQL (Cloud SQL) for relational data", "Real-time updates & conflict detection", "Secure encrypted connections"],
  },
  {
    icon: Mail,
    title: "Notification Engine",
    items: ["SendGrid integration", "Booking confirmations & cancellations", "Administrative alerts"],
  },
];

const results = [
  "Eliminated double-bookings",
  "Increased room utilization visibility",
  "Reduced administrative overhead",
  "Modernized facility experience",
  "Scalable across campuses",
];

const security = [
  "Environment-based secret management",
  "Role-based authentication",
  "Cloud-hosted infrastructure",
  "HTTPS encryption",
  "Controlled kiosk deployment",
];

const CaseStudyiPad = () => {
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
                Campus Tech · Room Management
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Tablet-Based Classroom Scheduling System
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                Enterprise-grade room management for modern educational facilities — wall-mounted iPads showing real-time schedules, managed from a single cloud dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden aspect-[16/7]">
              <img
                src="/images/ipad-scheduler.png"
                alt="iPad Classroom Scheduler wall-mounted display"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Digital Support Systems designed and deployed a fully integrated, cloud-connected classroom scheduling platform built specifically for wall-mounted tablets in educational environments. The solution combines native iPad/Android development, cloud infrastructure, and real-time database management to deliver a secure, scalable, and intuitive scheduling experience.
                </p>
                <p>
                  The system replaces paper schedules and disconnected booking tools with a modern, touch-enabled interface that provides instant room availability, booking control, and administrative oversight.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Technical Stack</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">iPad App</p>
                    <p className="font-medium text-foreground">SwiftUI</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Web Portal</p>
                    <p className="font-medium text-foreground">Next.js + React</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Backend</p>
                    <p className="font-medium text-foreground">Node.js (API Routes)</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Database</p>
                    <p className="font-medium text-foreground">MySQL (Cloud SQL)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="pb-24 bg-muted/50">
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Challenge</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Educational institutions often struggle with outdated scheduling systems that create friction for everyone.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-destructive text-xs font-bold">✕</span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-10">The Solution</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {solutionBlocks.map((block, i) => (
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

      {/* Security */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight mb-10">Security & Reliability</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {security.map((item, i) => (
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
                  <p className="text-foreground text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-10 sm:p-14">
              <h2 className="text-3xl font-bold tracking-tight mb-6">The Results</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {results.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-foreground font-medium text-sm">{item}</p>
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

export default CaseStudyiPad;
