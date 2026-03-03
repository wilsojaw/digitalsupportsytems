import { motion } from "framer-motion";
import { Wifi, Expand, FileText, Users } from "lucide-react";

const reasons = [
  {
    icon: Wifi,
    title: "IP-First Mindset",
    description: "Real network expertise powering every deployment.",
  },
  {
    icon: Expand,
    title: "Scalable Design",
    description: "Across doors, buildings, and entire campuses.",
  },
  {
    icon: FileText,
    title: "Clear Documentation",
    description: "Maintainable deployments with full transparency.",
  },
  {
    icon: Users,
    title: "Single Partner",
    description: "From concept through long-term support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
              Why Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Why Clients Choose Us
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              We combine deep network engineering expertise with practical,
              scalable access control solutions. Every project gets the same
              attention to detail—from a single door to a multi-campus rollout.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 hover:bg-surface-hover transition-colors"
              >
                <reason.icon className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
