import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import SqlInjection from "../components/sql/SqlInjection";

function SqlPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />

      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <h1 className="text-5xl font-bold text-yellow-400">
          SQL Injection Module
        </h1>

        <SqlInjection />
      </div>
    </div>
  );
}

export default SqlPage;
