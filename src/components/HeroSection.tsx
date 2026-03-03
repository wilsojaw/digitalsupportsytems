import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating gradient orbs for color */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-[hsl(260_80%_55%_/_0.06)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8"
            >
              Your buildings deserve{" "}
              <span className="text-gradient">smarter security.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 font-light"
            >
              We design and install modern access control and IT systems that just work — so you can focus on what matters most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                Get a Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-medium text-foreground hover:bg-muted transition-all duration-200"
              >
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Hero image with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y: imageY, scale: imageScale }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Modern glass building with gradient lighting"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
