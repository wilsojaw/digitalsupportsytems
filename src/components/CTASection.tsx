import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let's make your buildings smarter.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell us what you're working on. We'll show you how modern access control and IT infrastructure can make it better.
          </p>
          <a
            href="https://www.digitalsupportsystems.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
