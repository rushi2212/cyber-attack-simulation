import { motion } from "framer-motion";
import { Database } from "lucide-react";

function DatabaseNode({ data }) {
  return (
    <motion.div
      className="rounded-2xl border border-red-500/40 bg-black/70 px-4 py-4 text-left"
      animate={
        data.isActive
          ? {
              boxShadow: [
                "0 0 10px rgba(239,68,68,0.3)",
                "0 0 30px rgba(239,68,68,0.7)",
                "0 0 10px rgba(239,68,68,0.3)",
              ],
            }
          : {}
      }
      transition={{ duration: 1.2, repeat: data.isActive ? Infinity : 0 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-300">
            Database
          </p>
          <h4 className="mt-1 text-sm font-semibold text-white">
            {data.title}
          </h4>
        </div>
        <Database className="h-5 w-5 text-red-300" />
      </div>
      <p className="mt-2 text-xs text-gray-300">{data.description}</p>
    </motion.div>
  );
}

export default DatabaseNode;
