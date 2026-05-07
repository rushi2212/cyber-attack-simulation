import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Bug,
  Database,
  DatabaseZap,
  Key,
  Lock,
  ShieldAlert,
  Terminal,
  Server,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  userRequest: Terminal,
  reverseProxy: Server,
  preprocess: Activity,
  features: DatabaseZap,
  aiEngine: Bug,
  risk: Database,
  decision: ShieldAlert,
  logging: Terminal,
};

const eventIconMap = {
  attacker: Terminal,
  loginForm: Activity,
  httpRequest: Server,
  webServer: ShieldAlert,
  backend: Bug,
  queryBuilder: Lock,
  database: DatabaseZap,
  bypass: ShieldAlert,
  access: Database,
  userRequest: Terminal,
  reverseProxy: Server,
  preprocess: Activity,
  features: DatabaseZap,
  aiEngine: Bug,
  risk: Database,
  decision: ShieldAlert,
  logging: Terminal,
};

const COLUMNS = 2;

/**
 * WorkflowMap
 *
 * Props
 *  stages      – array of { id, title, description, status, request }
 *  activeIndex – which stage is currently active (-1 = none)
 *  isRunning   – whether the animation is in progress
 *  speed       – playback multiplier (1 = normal)
 *  payload     – SQL injection string shown in the terminal on node 0
 */
export default function WorkflowMap({
  stages,
  activeIndex,
  isRunning,
  speed,
  payload,
}) {
  const [typed, setTyped] = useState("");
  const wrapRef = useRef(null);
  const nodeRefs = useRef([]);
  const pathRefs = useRef([]);
  const [paths, setPaths] = useState([]);
  const [packetPos, setPacketPos] = useState(null);
  const rafRef = useRef(null);

  // ── Snake layout ────────────────────────────────────────────────────────────
  // Row 0 → left-to-right, Row 1 → right-to-left, Row 2 → left-to-right …
  const layout = useMemo(
    () =>
      stages.map((stage, index) => {
        const row = Math.floor(index / COLUMNS);
        const col = index % COLUMNS;
        const displayCol = row % 2 === 0 ? col : COLUMNS - 1 - col;
        return { stage, index, row, col: displayCol };
      }),
    [stages],
  );

  // ── Typing effect on node 0 ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isRunning || activeIndex !== 0) return;
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(payload.slice(0, i));
      if (i >= payload.length) clearInterval(id);
    }, 70 / speed);
    return () => clearInterval(id);
  }, [activeIndex, isRunning, payload, speed]);

  // ── Orthogonal SVG paths ────────────────────────────────────────────────────
  // Same-row neighbours → horizontal line through the cell padding gap.
  // Row-transition neighbours → vertical line at the shared column edge.
  // No diagonals, no bezier curves.
  const computePaths = useCallback(() => {
    if (!wrapRef.current) return;
    const wr = wrapRef.current.getBoundingClientRect();
    const next = [];

    for (let i = 0; i < stages.length - 1; i++) {
      const elA = nodeRefs.current[i];
      const elB = nodeRefs.current[i + 1];
      if (!elA || !elB) continue;

      const ra = elA.getBoundingClientRect();
      const rb = elB.getBoundingClientRect();
      const la = layout[i];
      const lb = layout[i + 1];

      let d;

      if (la.row === lb.row) {
        // Horizontal connector  ──────────────────────────────────────────
        const goRight = lb.col > la.col;
        const x1 = (goRight ? ra.right : ra.left) - wr.left;
        const x2 = (goRight ? rb.left : rb.right) - wr.left;
        const y = ra.top - wr.top + ra.height / 2;
        d = `M ${x1} ${y} L ${x2} ${y}`;
      } else {
        // Vertical connector  ────────────────────────────────────────────
        // Both nodes share the same display column at the row boundary.
        const x = ra.left - wr.left + ra.width / 2;
        const y1 = ra.bottom - wr.top;
        const y2 = rb.top - wr.top;
        d = `M ${x} ${y1} L ${x} ${y2}`;
      }

      next.push(d);
    }

    setPaths(next);
  }, [stages, layout]);

  // Recompute on resize
  useEffect(() => {
    const ro = new ResizeObserver(computePaths);
    if (wrapRef.current) ro.observe(wrapRef.current);
    nodeRefs.current.forEach((el) => el && ro.observe(el));
    computePaths();
    return () => ro.disconnect();
  }, [computePaths]);

  // Recompute when active node changes height (status panel expanding)
  useEffect(() => {
    const t = setTimeout(computePaths, 60);
    return () => clearTimeout(t);
  }, [activeIndex, computePaths]);

  // ── Packet animation along the active path segment ──────────────────────────
  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (!isRunning || activeIndex <= 0 || activeIndex >= stages.length) {
      setPacketPos(null);
      return;
    }

    const segIdx = activeIndex - 1;
    const pathEl = pathRefs.current[segIdx];
    if (!pathEl) {
      setPacketPos(null);
      return;
    }

    const len = pathEl.getTotalLength();
    const duration = Math.max(500, 1400 / speed);
    const t0 = performance.now();

    function tick(now) {
      const progress = Math.min((now - t0) / duration, 1);
      const pt = pathEl.getPointAtLength(progress * len);
      setPacketPos({ x: pt.x, y: pt.y });
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setPacketPos(null);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex, isRunning, speed, paths]);

  const totalRows = Math.ceil(stages.length / COLUMNS);

  return (
    <div ref={wrapRef} className="relative">
      {/* ── SVG connection layer ─────────────────────────────────────────────── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <marker
            id="wf-arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="rgba(99,102,241,0.55)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {paths.map((d, i) => (
          <path
            key={i}
            ref={(el) => {
              pathRefs.current[i] = el;
            }}
            d={d}
            fill="none"
            stroke={
              isRunning && activeIndex > i
                ? "rgba(34,211,238,0.5)"
                : "rgba(148,163,184,0.25)"
            }
            strokeWidth="1.5"
            strokeDasharray="5 4"
            markerEnd="url(#wf-arrowhead)"
            style={{ transition: "stroke 0.35s ease" }}
          />
        ))}

        {/* Travelling packet dot */}
        {packetPos && (
          <g>
            <circle
              cx={packetPos.x}
              cy={packetPos.y}
              r={8}
              fill="rgba(34,211,238,0.2)"
            />
            <circle cx={packetPos.x} cy={packetPos.y} r={3.5} fill="#22d3ee" />
          </g>
        )}
      </svg>

      {/* ── Node grid ────────────────────────────────────────────────────────── */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${totalRows}, auto)`,
        }}
      >
        {layout.map((item) => {
          const Icon = iconMap[item.stage.id] ?? Server;
          const EventIcon = eventIconMap[item.stage.id] ?? Activity;
          const isActive = isRunning && item.index === activeIndex;
          const isPast = isRunning && item.index < activeIndex;

          return (
            <div
              key={item.stage.id}
              className="p-3"
              style={{
                gridColumnStart: item.col + 1,
                gridRowStart: item.row + 1,
              }}
            >
              <div
                ref={(el) => {
                  nodeRefs.current[item.index] = el;
                }}
                className={[
                  "h-full rounded-xl border p-4 transition-all duration-300",
                  "bg-black/70 text-white shadow-[0_0_18px_rgba(34,211,238,0.12)]",
                  isActive
                    ? "border-cyan-400/60 ring-2 ring-cyan-400/20"
                    : isPast
                      ? "border-cyan-500/30"
                      : "border-slate-700/60",
                ].join(" ")}
              >
                {/* Header */}
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                      Stage {String(item.index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="text-[13px] font-semibold leading-snug text-slate-100">
                      {item.stage.title}
                    </h4>
                  </div>
                  <div
                    className={[
                      "flex-shrink-0 rounded-lg p-1.5 transition-colors duration-300",
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "bg-slate-800 text-slate-400",
                    ].join(" ")}
                  >
                    <Icon size={14} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {item.stage.description}
                </p>

                {/* Payload terminal – node 0 only */}
                {item.index === 0 && (
                  <div className="mt-3 rounded-md border border-red-500/20 bg-black/80 px-3 py-2 font-mono text-[10px] leading-relaxed text-red-300 break-all">
                    <span className="mr-1.5 select-none text-slate-500">$</span>
                    {isRunning ? typed : payload}
                    {isRunning && (
                      <span className="ml-0.5 animate-pulse">▋</span>
                    )}
                  </div>
                )}

                {/* Status panel – visible only on active node */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="status"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2.5">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-cyan-300">
                            On arrival
                          </p>
                          <span className="rounded-md bg-cyan-500/15 p-1 text-cyan-200">
                            <EventIcon size={12} />
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-cyan-100">
                          {item.stage.status}
                        </p>
                        <p className="mt-1 font-mono text-[9.5px] leading-relaxed text-cyan-200/80 break-all">
                          {item.stage.request}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
