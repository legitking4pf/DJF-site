import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function ExecutiveTimeline() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">Strategic Timeline</h2>

      <div className="space-y-6">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border-l border-neutral-700 pl-6"
          >
            <p className="text-sm text-neutral-400">{item.year}</p>
            <p className="font-medium">{item.title}</p>
            <p className="text-neutral-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}