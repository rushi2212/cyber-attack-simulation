function ThreatMonitor({ stage, stageIndex, totalStages, metrics }) {
  return (
    <div className="rounded-3xl border border-red-500/30 bg-black/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-red-300">
            Live attack monitor
          </p>
          <h4 className="text-lg font-semibold text-white">{stage.title}</h4>
        </div>
        <span className="rounded-full border border-red-400/40 px-3 py-1 text-xs text-red-200">
          {stageIndex + 1}/{totalStages}
        </span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Requests / sec</span>
          <span className="text-red-200">{metrics.rps.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Active bots</span>
          <span className="text-red-200">{metrics.bots}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Attack intensity</span>
          <span className="text-yellow-200">{stage.severity}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Firewall status</span>
          <span className="text-cyan-200">{metrics.firewall}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Blocked requests</span>
          <span className="text-green-200">
            {metrics.blocked.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Detection status
        </p>
        <p className="mt-2 text-xs text-gray-200">{stage.detection}</p>
      </div>
    </div>
  );
}

export default ThreatMonitor;
