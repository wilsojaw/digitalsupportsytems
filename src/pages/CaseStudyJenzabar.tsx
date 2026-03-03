import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, Play, Database, Server, Phone, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilities = [
  { icon: Database, title: "Instant Assessment", desc: "Immediate evaluation of all students' financial clearance viability for the current semester's enrollment sprint." },
  { icon: Server, title: "Data Replication", desc: "Replicates an on-premises subset of key AR data to minimize latency and optimize response times in high-traffic environments." },
  { icon: FileSpreadsheet, title: "Operator Tools", desc: "Immediate review of student financial status, adjustment, registration, and automatic archiving of transactions." },
  { icon: Phone, title: "ATA Synchronization", desc: "Synchronizes data with the Automatic Telephone Attendant — students can check status, pay via credit card, or request refunds by phone." },
];

const deliverables = [
  "SQL views, table subsets, and stored procedures for AR management",
  "Universal Batch Posting Utility for rapid transaction processing",
  "Financial Clearance Audit Windows Service with anomaly alerts",
  "ATA data sync with Asterisk-based IVR system",
  "VBA-powered Excel spreadsheets for financial clearance worksheets",
  "Automated monitoring with supervisor notification system",
  "Statistical analysis utilities for enrollment sprint support",
  "Semester-configurable registration sprint workflows",
];

const architecture = [
  { heading: "Database Schema", items: ["JADI: Tables, Views, Replication Modules, Maintenance Plans", "OUSADB: Tables (tblStudent, tblOUSA), Views, Stored Procedures"] },
  { heading: ".NET Services", items: ["Financial Clearance Audit Service", "ATA Data Sync", "IVR Automatic Telephone Attendant Monitor"] },
  { heading: "Integration Points", items: ["Asterisk Dial Plan on Linux CentOS", "Semester config via group shares & maintenance plans", "Excel worksheets powered by VBA and SQL views"] },
];

const CaseStudyJenzabar = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All Case Studies
            </Link>

            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Higher Education · Data Integration
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Jenzabar Application Data Integration
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                A custom toolset that transforms how a university manages student accounts — 
                connecting billing, phone systems, and financial clearance into one seamless workflow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl bg-secondary overflow-hidden aspect-[16/7] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-muted-foreground" />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  The Jenzabar Application Data Integration (JADI) is a comprehensive suite of tools 
                  designed to assist the student accounts office at a major university. While Jenzabar 
                  serves as the administrative data repository, significant customization was required 
                  to achieve complete functionality for the organization.
                </p>
                <p>
                  JADI was developed to provide the necessary tools to manage receivables through a 
                  collection of SQL views, table subsets, stored procedures, Visual Studio programs, 
                  maintenance plans, and VBA-activated Excel spreadsheets — all working together to 
                  streamline the financial clearance process.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 sticky top-28">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  At a Glance
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Developer</p>
                    <p className="font-medium text-foreground">Digital Support Systems, Inc.</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Huntsville, Alabama</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Platform</p>
                    <p className="font-medium text-foreground">Jenzabar ERP / MS SQL Server</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Scope</p>
                    <p className="font-medium text-foreground">Accounts Receivable Workflow</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-10">Key Capabilities</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-card border border-border p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <cap.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">JADI Explained</h2>
              <p className="text-muted-foreground text-lg mb-8">
                A walkthrough of the system architecture and workflow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-secondary border border-border overflow-hidden aspect-video relative"
            >
              {videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  className="w-full h-full object-contain bg-black"
                  autoPlay
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground mb-1">Video Overview</p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Upload a video file to see it here
                    </p>
                    <label className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer">
                      <Play className="h-4 w-4" />
                      Upload Video
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setVideoSrc(url);
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Video overview of the JADI system architecture and workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="pb-24 bg-muted/50">
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-10">Technical Architecture</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
                The solution relies on a rigorous understanding of Microsoft SQL Server and integrates 
                multiple components across database, services, and third-party systems.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {architecture.map((section, i) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-card border border-border p-6"
                >
                  <div className="text-4xl font-bold text-primary/15 mb-3">0{i + 1}</div>
                  <h3 className="font-semibold text-foreground mb-4">{section.heading}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
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

      {/* Deliverables */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-10">What We Delivered</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-10 sm:p-14">
              <h2 className="text-3xl font-bold tracking-tight mb-5">The Result</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                JADI transformed a manual, error-prone financial clearance process into an automated, 
                data-driven workflow — reducing processing time during enrollment sprints, eliminating 
                data sync errors, and giving the student accounts team tools that actually work the way 
                they need them to. Students can now check their status, pay, or request refunds by phone 
                without ever stepping into an office.
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
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

export default CaseStudyJenzabar;
