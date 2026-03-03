import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import networkVisual from "@/assets/network-visual.jpg";

const VisualBreakSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div style={{ y, scale, opacity }} className="relative">
          <img
            src={networkVisual}
            alt="Connected systems visualization"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl"
          />

          {/* Overlaid text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              >
                Connected. Secure.{" "}
                <span className="text-gradient">Effortless.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualBreakSection;
