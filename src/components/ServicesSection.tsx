import { motion } from "framer-motion";
import { Lock, Server, Headphones } from "lucide-react";

const services = [
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Know who's coming and going — from a single door to an entire campus. We install smart, network-based systems that are easy to manage and grow with you.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Fast, reliable networks built right. From cabling and Wi-Fi to servers and cloud — everything designed to keep your operations running smoothly.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "We don't disappear after installation. Our team stays with you to make sure everything keeps working — and evolves as your needs change.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Everything you need.{" "}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core services, delivered with precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl bg-card p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
