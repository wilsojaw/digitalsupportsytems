import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto font-light"
          >
            We design and install modern access control and IT systems that just work — so you can focus on what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
      </div>
    </section>
  );
};

export default HeroSection;
