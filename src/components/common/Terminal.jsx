function Terminal() {
  return (
    <div className="bg-black border border-green-500 rounded-xl p-5 w-full max-w-3xl mx-auto mt-10 shadow-[0_0_20px_#00ff99]">

      <p className="text-green-400">
        root@cybersim:~$
      </p>

      <p className="text-gray-300 mt-2">
        Initializing attack simulation...
      </p>

      <p className="text-red-400 mt-2">
        DDoS packets detected...
      </p>

      <p className="text-cyan-400 mt-2">
        Firewall monitoring traffic...
      </p>

    </div>
  );
}

export default Terminal;