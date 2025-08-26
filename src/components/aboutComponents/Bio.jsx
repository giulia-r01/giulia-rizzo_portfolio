import { HashLink } from "react-router-hash-link"

const Bio = ({ showButton = false }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row items-center md:items-start max-w-5xl px-0 mx-auto">
      <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
        <img
          src="./img/me.jpg"
          alt="Giulia Rizzo"
          className="w-56 h-72 rounded object-fill"
        />
      </div>

      <div className="text-white text-lg md:text-xl leading-relaxed">
        <p>
          Ciao! Sono{" "}
          <span className="font-semibold text-[#D4CAB6]">Giulia Rizzo</span>,
          una{" "}
          <span className="font-semibold text-[#D4CAB6]">
            Frontend & Fullstack Developer
          </span>{" "}
          appassionata di design elegante e funzionale.
        </p>
        <p className="pt-2">
          Amo organizzare idee e trasformarle in esperienze digitali intuitive,
          eleganti e{" "}
          <span className="font-semibold text-[#D4CAB6]">accessibili</span> a
          tutti.
        </p>
        <p className="pt-2">
          {" "}
          Ogni progetto per me è un’occasione per combinare{" "}
          <span className="font-semibold text-[#D4CAB6]">
            creatività e logica
          </span>
          , creando strumenti chiari, funzionali e{" "}
          <span className="font-semibold text-[#D4CAB6]">
            pensati per chi li usa
          </span>
          .{" "}
        </p>
        <div className="mt-5 pt-5">
          {showButton && (
            <HashLink
              smooth
              to="/about#work-experience"
              className="mt-5 mr-2 px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d] transition"
            >
              Esperienze
            </HashLink>
          )}
          {showButton && (
            <HashLink
              smooth
              to="/about#education"
              className="mt-5 mr-2 px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
            >
              Formazione
            </HashLink>
          )}
        </div>
        <div className="mt-5 pt-5">
          {showButton && (
            <HashLink
              smooth
              to="/about#skills"
              className="mt-5 px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
            >
              Skills
            </HashLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bio
