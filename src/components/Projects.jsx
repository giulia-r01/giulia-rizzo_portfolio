const Projects = () => {
  return (
    <section
      className="py-12 bg-gray-50 flex flex-col items-center"
      id="projects"
    >
      <h2 className="relative inline-block text-4xl font-bold text-black mb-12 pt-5 text-center">
        <span className="relative z-10">Progetti in evidenza</span>
        <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-6 sm:px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="relative inline-block text-3xl font-bold text-black mb-8 pt-5">
              <span className="relative z-10 whitespace-nowrap">
                Just Breathe
              </span>
              <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
            </h3>
            <img src="./img/Just-Breathe.png" />
            <p className="text-gray-600 my-4">
              <strong>Just Breathe</strong> – App full-stack di benessere
              digitale con diario, to-do, musica, respirazione guidata ed
              eventi. Ho sviluppato sia il backend (Spring Boot, PostgreSQL,
              JWT, API REST) sia il frontend (React, TypeScript, Bootstrap).
            </p>
          </div>
          <a
            href="https://just-breathe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il sito Just Breathe"
            className="text-center inline-block px-4 py-2 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
          >
            Visita
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="relative inline-block text-3xl font-bold text-black mb-8 pt-5">
              <span className="relative z-10 whitespace-nowrap">Netflix</span>
              <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
            </h3>
            <img src="./img/netflix.png" />
            <p className="text-gray-600 my-4">
              <strong>Netflix clone</strong> – Replica front-end del sito
              Netflix basata su un mockup, con layout responsive e utilizzo di
              API esterne per mostrare film e serie. Ho realizzato l’intera app
              solo lato frontend con React e CSS/Bootstrap.
            </p>
          </div>
          <a
            href="https://my-netflix-khaki.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il sito My Netflix in react"
            className="text-center inline-block px-4 py-2 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
          >
            Visita
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="relative inline-block text-3xl font-bold text-black mb-8 pt-5">
              <span className="relative z-10 whitespace-nowrap">
                Apple Music
              </span>
              <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
            </h3>
            <img src="./img/apple-music.png" />
            <p className="text-gray-600 my-4">
              <strong>Apple Music clone</strong> – Replica front-end del sito
              Apple Music, realizzata in React e TypeScript, con layout
              responsive e utilizzo di API esterne per la gestione di ricerca
              dei brani. Ho sviluppato l'intera applicazione solo lato frontend,
              seguendo un mockup per ricreare l'interfaccia utente e la
              funzionalità di ricerca utilizzando Redux.
            </p>
          </div>
          <a
            href="https://my-apple-music.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il sito My Apple Music"
            className="text-center inline-block px-4 py-2 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
          >
            Visita
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="relative inline-block text-3xl font-bold text-black mb-8 pt-5">
              <span className="relative z-10 whitespace-nowrap">My Meteo</span>
              <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
            </h3>
            <img src="./img/mymeteo.png" />
            <p className="text-gray-600 my-4">
              <strong>My Meteo</strong> – App front-end per le previsioni meteo,
              sviluppata in React, che utilizza API esterne per mostrare dati
              aggiornati su temperatura, umidità e condizioni atmosferiche. Ho
              realizzato l’intera applicazione solo lato frontend, curando
              layout responsive e interattività.
            </p>
          </div>
          <a
            href="https://my-meteo-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il sito My Meteo"
            className="text-center inline-block px-4 py-2 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
          >
            Visita
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="relative inline-block text-3xl font-bold text-black mb-8 pt-5">
              <span className="relative z-10 whitespace-nowrap">
                Spotify Clone
              </span>
              <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
            </h3>
            <img src="./img/spotify.png" />
            <p className="text-gray-600 my-4">
              <strong>Spotify clone</strong> – Replica front-end del sito
              Spotify sviluppata in JavaScript in team, con layout responsive e
              utilizzo di API esterne per mostrare brani, artisti e risultati di
              ricerca. Mi sono occupata principalmente della pagina di ricerca e
              della collaborazione al responsive design insieme al team.
            </p>
          </div>
          <a
            href="https://spoti-team7-final.vercel.app/assets/HTML/search.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il sito Spotify clone"
            className="text-center inline-block px-4 py-2 bg-[#D4CAB6] text-black rounded-lg shadow-md hover:bg-[#c2b79d]"
          >
            Visita
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
