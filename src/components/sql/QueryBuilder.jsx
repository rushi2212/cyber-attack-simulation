import { motion } from "framer-motion";

const queryLines = [
  "SELECT * FROM users",
  "WHERE username='admin'",
  "AND password='' OR '1'='1';",
];

function QueryBuilder({ isActive }) {
  return (
    <div className="rounded-2xl border border-yellow-500/30 bg-black/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
          Vulnerable backend
        </p>
        <span className="text-[10px] text-gray-500">/api/login</span>
      </div>
      <div className="mt-4 space-y-1 font-mono text-sm text-gray-200">
        {queryLines.map((line, index) => (
          <motion.div
            key={line}
            className={index === 2 ? "text-red-400" : ""}
            animate={
              isActive && index === 2
                ? { opacity: [0.4, 1, 0.4] }
                : { opacity: 1 }
            }
            transition={{
              duration: 1.2,
              repeat: isActive && index === 2 ? Infinity : 0,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Unsafe string concatenation lets the payload rewrite the WHERE clause.
      </p>
    </div>
  );
}

export default QueryBuilder;
