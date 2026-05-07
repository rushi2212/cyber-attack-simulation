function ThreatMonitor({ stage, payload, metrics }) {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-black/70 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        Threat monitor
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{stage.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Traffic sample</span>
          <span className="text-cyan-200">{payload}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Threat score</span>
          <span className="text-yellow-200">{metrics.threatScore}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Suspicious IPs</span>
          <span className="text-red-200">{metrics.suspiciousIps}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Attack status</span>
          <span className="text-cyan-200">{stage.status}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Threat severity</span>
          <span className="text-red-300">{stage.severity}</span>
        </div>
      </div>
    </div>
  );
}

export default ThreatMonitor;
