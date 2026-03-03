import { motion } from "framer-motion";
import { GraduationCap, Building2, Church, Landmark } from "lucide-react";

const industries = [
  { icon: GraduationCap, label: "Schools & Campuses", description: "Keep students and staff safe with modern access management." },
  { icon: Building2, label: "Offices & Commercial", description: "Smart entry systems that match the pace of your business." },
  { icon: Church, label: "Churches & Non-Profits", description: "Welcoming spaces with the security your community deserves." },
  { icon: Landmark, label: "Multi-Site Facilities", description: "Unified control across every building in your portfolio." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Built for the places{" "}
            <span className="text-muted-foreground">that matter.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 tracking-tight">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
