import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import BotDetection from "../components/bot/BotDetection";

function BotPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />

      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <h1 className="text-5xl font-bold text-green-400">
          Bot Detection Module
        </h1>

        <BotDetection />
      </div>
    </div>
  );
}

export default BotPage;
