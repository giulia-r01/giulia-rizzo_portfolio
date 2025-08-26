import { useState } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Gestione stato attivo
  const isHomeActive = location.pathname === "/" && location.hash === ""
  const isAboutActive = location.pathname === "/about"
  const isProjectsActive = location.hash === "#projects"
  const isContactActive = location.hash === "#contact"

  const linkClasses = (active) =>
    `text-lg transition ${
      active ? "font-bold text-black" : "text-black hover:font-bold"
    }`

  return (
    <nav className="bg-[#D4CAB6] shadow-md fixed w-full top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-black">
            Giulia Rizzo
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={linkClasses(isHomeActive)}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses(isAboutActive)}>
              About
            </NavLink>
            <HashLink
              smooth
              to="/#projects"
              className={linkClasses(isProjectsActive)}
            >
              Progetti
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className={linkClasses(isContactActive)}
            >
              Contatti
            </HashLink>
          </div>

          {/* Hamburger mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black hover:font-bold focus:outline-none focus:ring-2 focus:ring-black"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={linkClasses(isHomeActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={linkClasses(isAboutActive)}
            >
              About
            </NavLink>
            <HashLink
              smooth
              to="/#projects"
              onClick={() => setIsOpen(false)}
              className={linkClasses(isProjectsActive)}
            >
              Progetti
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className={linkClasses(isContactActive)}
            >
              Contatti
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default CustomNavbar
