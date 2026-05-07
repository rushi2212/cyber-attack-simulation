import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bug, Database, Key, Lock, Server, Terminal } from "lucide-react";

const iconMap = {
  attacker: Terminal,
  loginForm: Key,
  httpRequest: Server,
  webServer: Server,
  backend: Bug,
  queryBuilder: Lock,
  database: Database,
  bypass: Key,
  access: Lock,
};

function SqlNode({ data }) {
  const Icon = iconMap[data.id] || Server;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (data.id !== "attacker" || !data.isActive) {
      return;
    }

    setTyped("");
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTyped(data.payload.slice(0, index));
      if (index >= data.payload.length) {
        clearInterval(interval);
      }
    }, 70 / data.speed);

    return () => clearInterval(interval);
  }, [data.id, data.isActive, data.payload, data.speed]);

  return (
    <motion.div
      className={`rounded-2xl border px-4 py-4 text-left shadow-[0_0_20px_rgba(34,211,238,0.15)] ${data.glow}`}
      animate={data.isActive ? { scale: [1, 1.04, 1] } : { scale: 1 }}
      transition={{ duration: 1.2, repeat: data.isActive ? Infinity : 0 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            {data.typeLabel}
          </p>
          <h4 className="mt-1 text-sm font-semibold text-white">
            {data.title}
          </h4>
        </div>
        <Icon className={`h-5 w-5 ${data.iconColor}`} />
      </div>
      <p className="mt-2 text-xs text-gray-300">{data.description}</p>
      {data.id === "attacker" ? (
        <div className="mt-3 rounded-lg border border-red-500/40 bg-black/60 px-3 py-2 font-mono text-xs text-red-300">
          {typed}
          <span className="text-red-200">{data.isActive ? "▋" : ""}</span>
        </div>
      ) : null}
    </motion.div>
  );
}

export default SqlNode;
