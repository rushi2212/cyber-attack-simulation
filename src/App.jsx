import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DdosPage from "./pages/DdosPage";
import SqlPage from "./pages/SqlPage";
import XssPage from "./pages/XssPage";
import BotPage from "./pages/BotPage";
import WorkflowPage from "./pages/WorkflowPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ddos" element={<DdosPage />} />
      <Route path="/sql" element={<SqlPage />} />
      <Route path="/xss" element={<XssPage />} />
      <Route path="/bot" element={<BotPage />} />
      <Route path="/workflow" element={<WorkflowPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
