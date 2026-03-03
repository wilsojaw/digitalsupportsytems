import { motion } from "framer-motion";
import { GraduationCap, Building2, Church, Landmark } from "lucide-react";

const industries = [
  { icon: GraduationCap, label: "Education & Campuses" },
  { icon: Building2, label: "Commercial & Office Facilities" },
  { icon: Church, label: "Churches & Non-Profits" },
  { icon: Landmark, label: "Institutional & Multi-Building Sites" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            Industries
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Industries We Serve
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 hover:glow-border transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="font-display font-medium text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
