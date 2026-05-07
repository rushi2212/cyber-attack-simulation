import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import XssAttack from "../components/xss/XssAttack";

function XssPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />

      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <h1 className="text-5xl font-bold text-cyan-400">XSS Attack Module</h1>

        <XssAttack />
      </div>
    </div>
  );
}

export default XssPage;
