import { motion } from "framer-motion";

function RequestFlow({ transformations, activeIndex }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        Request transformation
      </p>
      <div className="mt-3 space-y-2">
        {transformations.map((item, index) => (
          <motion.div
            key={item}
            className={`rounded-lg border px-3 py-2 text-xs ${
              index <= activeIndex
                ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-100"
                : "border-white/10 bg-white/5 text-gray-400"
            }`}
            animate={index === activeIndex ? { x: [0, 6, 0] } : { x: 0 }}
            transition={{
              duration: 1.1,
              repeat: index === activeIndex ? Infinity : 0,
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RequestFlow;
