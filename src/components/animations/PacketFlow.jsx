import { motion } from "framer-motion";

function PacketFlow() {
  return (
    <div className="relative h-64 border border-green-500 rounded-xl overflow-hidden bg-black">

      {/* Server */}
      <div className="absolute right-10 top-24 w-28 h-16 bg-green-500 rounded-lg flex items-center justify-center text-black font-bold shadow-[0_0_20px_#00ff99]">
        SERVER
      </div>

      {/* Packets */}
      {[50, 90, 130, 170, 210].map((top, index) => (
        <motion.div
          key={index}
          initial={{ x: -100 }}
          animate={{ x: 900 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute w-5 h-5 bg-red-500 rounded-full"
          style={{ top }}
        />
      ))}
    </div>
  );
}

export default PacketFlow;