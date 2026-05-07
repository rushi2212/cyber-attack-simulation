import { Shield } from "lucide-react";
import { motion } from "framer-motion";

function FirewallShield() {
  return (
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="flex justify-center mt-10"
    >
      <div className="p-10 rounded-full border border-cyan-400 shadow-[0_0_30px_#00ccff]">

        <Shield
          size={80}
          className="text-cyan-400"
        />

      </div>
    </motion.div>
  );
}

export default FirewallShield;