import { motion } from "framer-motion";

function SessionHijack({ isActive }) {
  return (
    <motion.div
      className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-center"
      animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
      transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-red-300">
        Session hijack
      </p>
      <p className="mt-3 text-sm text-red-200">
        Attacker is impersonating the victim session.
      </p>
    </motion.div>
  );
}

export default SessionHijack;
