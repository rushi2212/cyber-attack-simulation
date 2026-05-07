function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full blur-[150px] opacity-20" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-20" />

    </div>
  );
}

export default CyberBackground;