import { motion } from "framer-motion";

function QueryAnimation() {
  return (
    <div className="mt-10 relative h-32 overflow-hidden">

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 500 }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-10 bg-red-500 px-5 py-2 rounded-full text-white"
      >
        SQL QUERY
      </motion.div>

    </div>
  );
}

export default QueryAnimation;