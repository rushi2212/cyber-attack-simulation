import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScriptInjection({ isActive, speed, payload, cycle }) {
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
  }, [isActive, payload, speed, cycle]);

  return (
    <div className="rounded-2xl border border-yellow-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
        Script injection
      </p>
      <motion.div
        className="mt-3 rounded-xl border border-yellow-500/40 bg-black px-4 py-3 font-mono text-sm text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
        animate={
          isActive
            ? {
                boxShadow: [
                  "0 0 8px rgba(250,204,21,0.2)",
                  "0 0 30px rgba(250,204,21,0.6)",
                  "0 0 8px rgba(250,204,21,0.2)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
      >
        {typed}
        <span className="text-yellow-100">{isActive ? "▋" : ""}</span>
      </motion.div>
      <p className="mt-2 text-xs text-gray-500">
        The payload is stored or reflected back to the victim without
        sanitization.
      </p>
    </div>
  );
}

export default ScriptInjection;
