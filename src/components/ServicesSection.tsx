import { motion } from "framer-motion";
import { Shield, Network, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Access Control",
    subtitle: "Allegion / ISONAS",
    description:
      "Network-native door control, architecture, deployment, and lifecycle support.",
  },
  {
    icon: Network,
    title: "IT Infrastructure Design",
    subtitle: "End-to-End",
    description:
      "Network, cabling, fiber, server/cloud integration—engineered for performance and scale.",
  },
  {
    icon: Headphones,
    title: "Integration & Support",
    subtitle: "Ongoing",
    description:
      "Practical integration and ongoing support so systems remain dependable long-term.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Our Core Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass-card glow-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
                {service.subtitle}
              </p>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
