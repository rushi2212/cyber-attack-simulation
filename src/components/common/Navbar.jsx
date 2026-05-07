import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b border-green-500 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-400 hover:text-green-300"
          onClick={handleClose}
        >
          CyberSim
        </NavLink>

        <button
          type="button"
          className="md:hidden text-gray-200 hover:text-green-400"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span className="block w-7 h-0.5 bg-current mb-1.5" />
          <span className="block w-7 h-0.5 bg-current mb-1.5" />
          <span className="block w-7 h-0.5 bg-current" />
        </button>

        <div className="hidden md:flex gap-8 text-gray-300">
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
      </div>

      <div
        className={`md:hidden border-t border-green-500/40 px-6 pb-5 pt-3 text-gray-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <NavLink
            to="/"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            Overview
          </NavLink>

          <NavLink
            to="/ddos"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            DDoS
          </NavLink>

          <NavLink
            to="/sql"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            SQL
          </NavLink>

          <NavLink
            to="/xss"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            XSS
          </NavLink>

          <NavLink
            to="/bot"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            Bot Detection
          </NavLink>

          <NavLink
            to="/workflow"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            Workflow
          </NavLink>

          <NavLink
            to="/attack-flow"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            Attack Flow
          </NavLink>

          <NavLink
            to="/dashboard"
            className="hover:text-green-400"
            onClick={handleClose}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
