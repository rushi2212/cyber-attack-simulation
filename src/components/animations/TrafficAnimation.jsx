import { motion } from "framer-motion";

function TrafficAnimation() {
  return (
    <div className="flex gap-3 mt-10 justify-center">

      {[1,2,3,4,5].map((item) => (
        <motion.div
          key={item}
          animate={{
            height: [20, 80, 20],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: item * 0.2,
          }}
          className="w-4 bg-green-400 rounded-full"
        />
      ))}

    </div>
  );
}

export default TrafficAnimation;