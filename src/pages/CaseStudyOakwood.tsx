import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Full building automation for efficiency and control",
  "Classroom AV optimized for distance learning",
  "High-bandwidth fiber backbone connecting all campus nodes",
  "Cloud-based access control across every entry point",
  "Campus-wide video surveillance system",
  "On-premise phone system with PA/intercom integration",
  "Wall-mounted iPad classroom scheduling displays",
  "Comprehensive backup and disaster recovery",
  "Hardened network with enterprise cybersecurity",
];

const photos = [
  { src: "/images/OAA_SlidingDoor.jpeg", alt: "Automated sliding doors at the entrance", label: "Entry & Access Control" },
  { src: "/images/OAA_Foyer.jpeg", alt: "Modern foyer with technology integration", label: "Foyer" },
  { src: "/images/OAA_ScienceLab.jpeg", alt: "Science lab with smart classroom setup", label: "Science Lab" },
  { src: "/images/OAA_ClassroomDisplay.jpeg", alt: "Classroom display and scheduling technology", label: "Classroom Tech" },
  { src: "/images/oaa_plaque.jpeg", alt: "Dedication plaque for the building", label: "Dedication" },
];

const CaseStudyOakwood = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

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
                Education · Campus Technology
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Oakwood Adventist Academy
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                The most technologically advanced building on the Oakwood University campus — 
                designed for a new generation of learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section ref={parallaxRef} className="pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div style={{ y }} className="flex flex-col gap-3 sm:gap-4">
            {/* Featured photo — full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden aspect-[21/9]"
            >
              <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover" />
            </motion.div>

            {/* 2×2 grid of remaining photos */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {photos.slice(1).map((photo, i) => (
                <motion.div
                  key={photo.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.1, duration: 0.5 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">Wiring Annotation Scheme</h2>
              <p className="text-muted-foreground text-lg mb-8">An overview of the structured cabling and wiring layout for the facility.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-video bg-black"
            >
              <video
                controls
                className="w-full h-full object-contain"
                src="/images/WiringAnnotationScheme.mp4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
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
                  When Oakwood Adventist Academy set out to build a new high school facility, 
                  they needed more than just a building — they needed a campus that could support 
                  the way students learn today and tomorrow.
                </p>
                <p>
                  Opened in August 2020, the Charles and Etta Dudley High School Building is 
                  designed from the ground up for full automation, seamless distance learning, 
                  and enterprise-grade connectivity. Every classroom, hallway, and entry point 
                  is wired for the future.
                </p>
                <p>
                  From cloud-based access control at every door to a dedicated fiber backbone 
                  connecting the entire campus, this facility sets the standard for what modern 
                  educational infrastructure can look like.
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
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="font-medium text-foreground">Oakwood University</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Huntsville, Alabama</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Completed</p>
                    <p className="font-medium text-foreground">August 2020</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Scope</p>
                    <p className="font-medium text-foreground">Full technology deployment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="pb-24">
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
              {objectives.map((obj, i) => (
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
                  <p className="text-foreground text-sm leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
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
                The completed facility now stands as a model for modern educational infrastructure — 
                empowering students and faculty with the tools they need for success in a digital world. 
                Every system works together seamlessly, from the moment someone walks through the 
                automated doors to the last lesson streamed to a remote classroom.
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

export default CaseStudyOakwood;
