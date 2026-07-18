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
            Full Stack Developer
          </span>{" "}
          con una particolare attenzione allo sviluppo frontend, alla UX e
          all’accessibilità digitale.
        </p>

        <p className="pt-2">
          Progetto e sviluppo applicazioni complete, dalle interfacce intuitive
          e responsive alla logica backend, alle API REST e alla gestione dei
          dati. Mi piace trasformare idee e requisiti in soluzioni{" "}
          <span className="font-semibold text-[#D4CAB6]">
            chiare, funzionali e curate
          </span>
          .
        </p>

        <p className="pt-2">
          Il frontend è l’ambito che mi appassiona di più, perché mi permette di
          unire{" "}
          <span className="font-semibold text-[#D4CAB6]">
            creatività, logica e attenzione alle persone
          </span>
          . Per me l’accessibilità non è un’aggiunta finale, ma una parte
          essenziale dello sviluppo di esperienze digitali davvero{" "}
          <span className="font-semibold text-[#D4CAB6]">
            utilizzabili da tutti
          </span>
          .
        </p>

        {showButton && (
          <div className="mt-5 pt-5 flex flex-col md:flex-row md:justify-start md:items-center gap-3 w-auto">
            <HashLink
              smooth
              to="/about#work-experience"
              className="text-center px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d] transition w-auto"
            >
              Esperienze
            </HashLink>

            <HashLink
              smooth
              to="/about#education"
              className="text-center px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d] transition w-auto"
            >
              Formazione
            </HashLink>

            <HashLink
              smooth
              to="/about#skills"
              className="text-center px-6 py-3 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d] transition w-auto"
            >
              Skills
            </HashLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
