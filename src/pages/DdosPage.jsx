import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import DdosAttack from "../components/ddos/DdosAttack";

function DdosPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />

      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <h1 className="text-5xl font-bold text-red-400">DDoS Attack Module</h1>

        <DdosAttack />
      </div>
    </div>
  );
}

export default DdosPage;
