import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const handleDownload = () => {
    const pdfUrl = "../assets/VidhiSaxena.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "VidhiSaxena.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isAboutOrProjects =
    location.pathname === "/about" || location.pathname === "/projects";

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">VS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <div
          className={`text-black cursor-pointer ${
            isAboutOrProjects ? "hover:text-blue-500" : "hover:text-white"
          }`}
          onClick={handleDownload}
        >
          Resume
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
