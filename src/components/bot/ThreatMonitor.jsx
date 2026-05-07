function ThreatMonitor({ stage, stageIndex, totalStages, metrics }) {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-black/70 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Live detection monitor
          </p>
          <h4 className="text-lg font-semibold text-white">{stage.title}</h4>
        </div>
        <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-200">
          {stageIndex + 1}/{totalStages}
        </span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Total requests</span>
          <span className="text-green-200">
            {metrics.totalRequests.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Human users</span>
          <span className="text-green-200">
            {metrics.humanUsers.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Detected bots</span>
          <span className="text-red-200">{metrics.bots.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Threat score</span>
          <span className="text-yellow-200">{metrics.threatScore}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Suspicious IPs</span>
          <span className="text-yellow-200">{metrics.suspiciousIps}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">CAPTCHA status</span>
          <span className="text-cyan-200">{metrics.captchaStatus}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Firewall status</span>
          <span className="text-cyan-200">{metrics.firewallStatus}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Blocked requests</span>
          <span className="text-red-200">
            {metrics.blockedRequests.toLocaleString()}
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
