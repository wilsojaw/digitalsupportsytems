import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Database, TabletSmartphone, Video } from "lucide-react";

const caseStudies = [
  {
    icon: GraduationCap,
    title: "Oakwood Adventist Academy",
    subtitle: "A smarter campus, from the ground up.",
    description: "We designed and deployed a fully automated high school building — complete with smart classrooms, distance learning capabilities, and a fiber backbone connecting it all.",
    challenge: "Build a future-proof educational facility that supports modern teaching and campus-wide automation.",
    solution: "Integrated building management, AV systems for distance learning, and internodal fiber infrastructure.",
    outcome: "A model for what modern educational infrastructure can look like.",
    tags: ["Building Automation", "Fiber Optics", "Smart Classrooms"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    slug: "/case-studies/oakwood-adventist-academy",
  },
  {
    icon: Database,
    title: "Jenzabar Data Interface",
    subtitle: "Connecting the systems that run higher education.",
    description: "We built a custom middleware layer that seamlessly connects billing, phone systems, and student data — so administrators spend less time wrestling with software.",
    challenge: "Integrate phone and billing systems with a complex higher education ERP platform.",
    solution: "A purpose-built data interface for secure, real-time information exchange between systems.",
    outcome: "Faster workflows, fewer errors, and data that actually stays in sync.",
    tags: ["Data Integration", "Higher Education", "Custom Software"],
    gradient: "from-violet-500/20 to-purple-500/20",
    slug: "/case-studies/jenzabar-data-interface",
  },
  {
    icon: TabletSmartphone,
    title: "iPad Classroom Scheduler",
    subtitle: "Every room, at a glance.",
    description: "Wall-mounted iPads outside every classroom showing real-time schedules, managed from a single admin portal in the cloud. No more double-bookings.",
    challenge: "Create a centralized, easy-to-manage scheduling display system across an entire campus.",
    solution: "A full-stack platform with a native iPad app and a cloud-based admin dashboard.",
    outcome: "Double-bookings eliminated. The campus experience, modernized.",
    tags: ["iPad", "Cloud Platform", "Campus Tech"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    slug: "/case-studies/ipad-classroom-scheduler",
  },
  {
    icon: Video,
    title: "Voice-Controlled Zoom Room",
    subtitle: "Enterprise meetings, effortlessly.",
    description: "A broadcast-quality hybrid meeting room you can control with your voice. Powered by Shure audio, a 4K AI camera, and dual displays — all launched with a single tap.",
    challenge: "Deliver a professional hybrid meeting experience with broadcast-quality audio and video.",
    solution: "Integrated Zoom Room with Shure audio processing, AI-driven 4K camera, and Alexa voice control.",
    outcome: "One-touch meetings with studio-grade quality. Hybrid collaboration, perfected.",
    tags: ["AV Integration", "Zoom Rooms", "Voice Control"],
    gradient: "from-orange-500/20 to-amber-500/20",
    slug: "/case-studies/alexa-zoom-room",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Case Studies</p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              Real projects.{" "}
              <span className="text-muted-foreground">Real results.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A look at how we've helped schools, offices, and organizations 
              build smarter, more secure spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="group rounded-3xl border border-border bg-card p-8 sm:p-10 hover:shadow-xl transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center shrink-0`}>
                      <study.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">{study.title}</h2>
                      <p className="text-lg text-primary font-medium">{study.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {study.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</p>
                      <p className="text-sm text-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</p>
                      <p className="text-sm text-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Outcome</p>
                      <p className="text-sm text-foreground leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>

                  {/* Tags & Link */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {study.slug && (
                      <Link
                        to={study.slug}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Ready to start your project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's talk about what you're building and how we can help.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
