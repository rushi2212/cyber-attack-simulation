function ThreatMonitor({ stage, stageIndex, totalStages }) {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-black/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Threat monitor
          </p>
          <h4 className="text-lg font-semibold text-white">{stage.title}</h4>
        </div>
        <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-200">
          {stageIndex + 1}/{totalStages}
        </span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Request status</span>
          <span className="text-green-300">{stage.requestStatus}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Threat severity</span>
          <span className="text-red-300">{stage.severity}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Detection status</span>
          <span className="text-yellow-300">{stage.detection}</span>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          SQL query log
        </p>
        <p className="mt-2 font-mono text-xs text-gray-200">{stage.queryLog}</p>
      </div>
    </div>
  );
}

export default ThreatMonitor;
