import { motion } from "framer-motion";
import { Shield } from "lucide-react";

function FirewallNode({ data }) {
  return (
    <motion.div
      className="rounded-2xl border border-cyan-400/40 bg-black/70 px-4 py-4 text-left"
      animate={data.isActive ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
      transition={{ duration: 1.4, repeat: data.isActive ? Infinity : 0 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200">
            Firewall / WAF
          </p>
          <h4 className="mt-1 text-sm font-semibold text-white">
            Request Inspection
          </h4>
        </div>
        <Shield className="h-5 w-5 text-cyan-300" />
      </div>
      <p className="mt-2 text-xs text-gray-300">
        Scans for SQL injection signatures and blocks malicious payloads.
      </p>
    </motion.div>
  );
}

export default FirewallNode;
