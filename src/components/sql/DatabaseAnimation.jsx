import { motion } from "framer-motion";

function DatabaseAnimation({ isBreached }) {
  return (
    <div className="rounded-2xl border border-red-500/30 bg-black/70 p-4 text-center">
      <motion.div
        animate={
          isBreached
            ? {
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 15px rgba(255,0,0,0.4)",
                  "0 0 40px rgba(255,0,0,0.8)",
                  "0 0 15px rgba(255,0,0,0.4)",
                ],
              }
            : { scale: 1, boxShadow: "0 0 12px rgba(0,255,153,0.3)" }
        }
        transition={{ duration: 1.2, repeat: isBreached ? Infinity : 0 }}
        className={`mx-auto flex h-28 w-28 items-center justify-center rounded-2xl font-bold ${
          isBreached ? "bg-red-500 text-black" : "bg-green-500 text-black"
        }`}
      >
        DATABASE
      </motion.div>
      <p
        className={`mt-3 text-sm ${isBreached ? "text-red-300" : "text-gray-400"}`}
      >
        {isBreached ? "Unauthorized access detected" : "Awaiting query"}
      </p>
    </div>
  );
}

export default DatabaseAnimation;
