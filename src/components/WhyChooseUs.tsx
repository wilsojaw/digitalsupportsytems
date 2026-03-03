import { motion } from "framer-motion";
import { Zap, TrendingUp, FileCheck, Heart } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Built to Perform",
    description: "Systems engineered for speed, reliability, and zero downtime.",
  },
  {
    icon: TrendingUp,
    title: "Ready to Grow",
    description: "Start with one building. Expand to a hundred. We scale with you.",
  },
  {
    icon: FileCheck,
    title: "Fully Documented",
    description: "Clear records and plans so anyone on your team can understand the system.",
  },
  {
    icon: Heart,
    title: "One Partner, Start to Finish",
    description: "Design, install, and support — all from a team that knows your setup inside out.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Why people choose us.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We make complex technology feel simple.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 tracking-tight">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
