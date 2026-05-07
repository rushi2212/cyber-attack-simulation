import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import WorkflowDiagram from "../components/workflow/WorkflowDiagram";

function WorkflowPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />

      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <h1 className="text-5xl font-bold text-green-400">
          Workflow Visualization
        </h1>

        <WorkflowDiagram />
      </div>
    </div>
  );
}

export default WorkflowPage;
