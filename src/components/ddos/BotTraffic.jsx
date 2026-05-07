import { motion } from "framer-motion";

function BotTraffic() {
  return (
    <div className="mt-10 relative h-64 border border-red-500 rounded-xl overflow-hidden bg-black">

      {/* Server */}
      <div className="absolute right-10 top-24 w-28 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
        TARGET
      </div>

      {/* Bots */}
      {[50, 100, 150, 200].map((top, index) => (
        <motion.div
          key={index}
          initial={{ x: -100 }}
          animate={{ x: 850 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="absolute flex items-center gap-2"
          style={{ top }}
        >
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            🤖
          </div>

          <div className="w-5 h-5 bg-red-500 rounded-full" />
        </motion.div>
      ))}

    </div>
  );
}

export default BotTraffic;