import AttackFlow from "./AttackFlow";
import AttackWorkflows from "./AttackWorkflows";

function WorkflowDiagram() {
  return (
    <div className="mt-20 px-10">
      <h2 className="text-4xl font-bold text-green-400 mb-10">
        Cyber Attack Workflow
      </h2>

      <div className="bg-black/40 border border-green-500 rounded-xl p-10">
        <AttackFlow />
      </div>

      <AttackWorkflows />
    </div>
  );
}

export default WorkflowDiagram;
