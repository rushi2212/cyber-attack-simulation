import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const payload = "' OR '1'='1";

function SqlPayloadInput({ isActive, speed, cycle }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
  }, [cycle]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTyped(payload.slice(0, index));
      if (index >= payload.length) {
        clearInterval(interval);
      }
    }, 90 / speed);

    return () => clearInterval(interval);
  }, [isActive, speed, cycle]);

  return (
    <div className="rounded-2xl border border-green-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-green-300">
        Hacker terminal
      </p>
      <div className="mt-3 text-sm text-gray-400">Username</div>
      <motion.div
        className="mt-2 rounded-xl border border-green-500/40 bg-black px-4 py-3 font-mono text-lg text-red-400 shadow-[0_0_20px_rgba(0,255,153,0.25)]"
        animate={
          isActive
            ? {
                boxShadow: [
                  "0 0 10px rgba(0,255,153,0.2)",
                  "0 0 30px rgba(0,255,153,0.6)",
                  "0 0 10px rgba(0,255,153,0.2)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
      >
        {typed}
        <span className="text-green-300">{isActive ? "▋" : ""}</span>
      </motion.div>
      <p className="mt-2 text-xs text-gray-500">
        Malicious payload forces the query to evaluate as true.
      </p>
    </div>
  );
}

export default SqlPayloadInput;
