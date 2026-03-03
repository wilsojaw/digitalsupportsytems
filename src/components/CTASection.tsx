import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl glass-card glow-border p-12 sm:p-16 text-center"
        >
          {/* Decorative glows */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 relative">
            Ready to Plan a Secure, Scalable Deployment?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative">
            Schedule a consultation to discuss your access control and
            infrastructure needs. We'll help you build something that lasts.
          </p>
          <a
            href="https://www.digitalsupportsystems.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
