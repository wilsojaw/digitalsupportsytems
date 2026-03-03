import { motion } from "framer-motion";
import { Network, Cable, Server, Shield, FileText, Building2, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Network,
    title: "Network & Fiber Design",
    desc: "End-to-end network topology planning for high-bandwidth, low-latency connectivity across your entire facility.",
  },
  {
    icon: Cable,
    title: "Structured Cabling Systems",
    desc: "Standards-based cabling infrastructure — Cat6, fiber, and beyond — planned and installed for long-term performance.",
  },
  {
    icon: Server,
    title: "Server, Virtualization & Cloud",
    desc: "On-premise server design, VM environments, and hybrid cloud integration tailored to your operational needs.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    desc: "Every layer of the infrastructure is designed with cybersecurity in mind — from network segmentation to endpoint hardening.",
  },
  {
    icon: FileText,
    title: "Documentation & Lifecycle Planning",
    desc: "Full as-built documentation, maintenance schedules, and lifecycle roadmaps so your team always knows what they have.",
  },
  {
    icon: Building2,
    title: "New Building Technology Plan",
    desc: "Comprehensive IT planning for new construction — from initial design through commissioning and go-live.",
  },
];

const outcomes = [
  "Cleaner operations and fewer surprises",
  "Infrastructure that supports growth and new applications",
  "Standards-based deployments that are easy to maintain",
];

const steps = [
  { n: "01", title: "Discovery & Assessment", desc: "We audit your existing environment, document what's there, and identify gaps, risks, and opportunities." },
  { n: "02", title: "Architecture Design", desc: "A detailed infrastructure plan — network topology, cabling layout, server specs, and cloud strategy." },
  { n: "03", title: "Implementation", desc: "Our team handles installation, configuration, and testing with minimal disruption to your operations." },
  { n: "04", title: "Handoff & Support", desc: "Full documentation delivered. We train your team and remain available for ongoing support and planning." },
];

const ITInfrastructure = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
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
            <Server className="h-4 w-4" />
            IT Infrastructure
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
            Built to last.{" "}
            <span className="text-muted-foreground">Designed to scale.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light max-w-2xl">
            We design and implement robust IT infrastructure that serves as the foundation for secure, high-performance operations. From network topology and structured cabling to server and cloud integration, our solutions are engineered for reliability and scalability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Schedule a Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">What we deliver.</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A complete infrastructure practice — from the first cable pull to the cloud dashboard.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">How it works.</h2>
          <p className="text-lg text-muted-foreground">From assessment to handoff in four steps.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
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

    {/* What You Get */}
    <section className="pb-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-10 sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight mb-5">What you get.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A solid infrastructure foundation means fewer outages, easier scaling, and technology that actually supports your team instead of slowing it down.
            </p>
            <div className="space-y-4 mb-10">
              {outcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ITInfrastructure;
