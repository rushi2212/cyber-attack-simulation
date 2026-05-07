import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 border-b border-green-500 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <NavLink
        to="/"
        className="text-2xl font-bold text-green-400 hover:text-green-300"
      >
        CyberSim
      </NavLink>

      <div className="flex gap-8 text-gray-300">
        <NavLink to="/" className="hover:text-green-400">
          Overview
        </NavLink>

        <NavLink to="/ddos" className="hover:text-green-400">
          DDoS
        </NavLink>

        <NavLink to="/sql" className="hover:text-green-400">
          SQL
        </NavLink>

        <NavLink to="/xss" className="hover:text-green-400">
          XSS
        </NavLink>

        <NavLink to="/bot" className="hover:text-green-400">
          Bot Detection
        </NavLink>

        <NavLink to="/workflow" className="hover:text-green-400">
          Workflow
        </NavLink>

        <NavLink to="/attack-flow" className="hover:text-green-400">
          Attack Flow
        </NavLink>

        <NavLink to="/dashboard" className="hover:text-green-400">
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
