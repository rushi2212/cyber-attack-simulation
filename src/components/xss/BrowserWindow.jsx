import { motion } from "framer-motion";

function BrowserWindow({ isExecuting }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4">
      <div className="flex items-center gap-2 text-xs text-cyan-200">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-2 uppercase tracking-[0.3em] text-gray-400">
          Victim browser
        </span>
      </div>
      <div className="mt-4 rounded-xl border border-cyan-400/20 bg-black/60 px-4 py-6 text-sm text-gray-300">
        <p className="text-cyan-200">Rendering vulnerable page...</p>
        <p className="mt-2 text-xs text-gray-400">
          Injected DOM nodes appear below.
        </p>
        <motion.div
          className="mt-4 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-3 py-2 text-xs text-yellow-200"
          animate={isExecuting ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.6 }}
          transition={{ duration: 1.4, repeat: isExecuting ? Infinity : 0 }}
        >
          Script execution pipeline active
        </motion.div>
      </div>
    </div>
  );
}

export default BrowserWindow;
