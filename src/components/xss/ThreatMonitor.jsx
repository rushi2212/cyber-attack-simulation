function ThreatMonitor({ stage, stageIndex, totalStages, payload }) {
  return (
    <div className="rounded-3xl border border-yellow-500/30 bg-black/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
            Live attack monitor
          </p>
          <h4 className="text-lg font-semibold text-white">{stage.title}</h4>
        </div>
        <span className="rounded-full border border-yellow-400/40 px-3 py-1 text-xs text-yellow-200">
          {stageIndex + 1}/{totalStages}
        </span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Script payload</span>
          <span className="text-yellow-300">{payload}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Browser status</span>
          <span className="text-cyan-200">{stage.browserStatus}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Cookie theft</span>
          <span className="text-red-200">{stage.cookieStatus}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Threat severity</span>
          <span className="text-red-300">{stage.severity}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Detection alerts</span>
          <span className="text-green-300">{stage.detection}</span>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Event log
        </p>
        <p className="mt-2 font-mono text-xs text-gray-200">{stage.log}</p>
      </div>
    </div>
  );
}

export default ThreatMonitor;
