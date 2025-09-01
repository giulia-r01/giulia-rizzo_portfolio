const Contacts = () => {
  return (
    <section id="contact" className="py-12 bg-black text-center">
      <h2 className="relative inline-block text-4xl font-bold text-white mb-12 pt-5 text-center">
        <span className="relative z-10 whitespace-nowrap">Contatti</span>
        <span className="absolute bottom-1 left-2 w-full h-3 bg-[#847352] z-0"></span>
      </h2>

      <p className="mb-4 flex flex-col gap-4 items-center justify-center">
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#D4CAB6"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.5l-12-9h24l-12 9zm0 2.5l-12-9v14h24v-14l-12 9z" />
          </svg>
          <a
            href="mailto:girzzo@gmail.com"
            className="text-[#D4CAB6] hover:underline"
          >
            girzzo@gmail.com
          </a>
        </span>

        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#D4CAB6"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.937v5.669H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.123 2.062 2.062 0 01-.001 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0z" />
          </svg>
          <a
            href="www.linkedin.com/in/giulia-rizzo-rg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4CAB6] hover:underline"
            aria-label="LinkedIn - Vai al mio profilo"
          >
            LinkedIn
          </a>
        </span>

        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#D4CAB6"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.022c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .321.216.694.824.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <a
            href="https://github.com/giulia-r01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4CAB6] hover:underline"
            aria-label="GitHub - Vai al mio profilo"
          >
            GitHub
          </a>
        </span>
      </p>
    </section>
  )
}

export default Contacts
