const Education = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "EPICODE Institute of Technology",
      period: "2025",
      skillsDeveloped: [
        "Backend: Java, Spring Boot, JPA, REST API, PostgreSQL, JWT (autenticazione lato server)",
        "Frontend: React, Redux Toolkit, TypeScript, HTML5, CSS3, Bootstrap, Vite",
        "Strumenti / Versionamento: Git, GitHub",
      ],
    },
    {
      title: "Corso AI & GitHub Copilot – Silvio Lucchetti",
      company: "EPICODE Institute of Technology",
      period: "2025",
      skillsDeveloped: [
        "LLM, Prompt Engineering, GitHubCopilot",
        "Automazioni nello sviluppo software",
        "Uso pratico di AI in ambito coding",
      ],
    },

    {
      title: "Python Intermediate",
      company: "EPICODE Institute of Technology",
      period: "2025",
    },

    {
      title: "Laurea Magistrale in Media, Comunicazione Digitale e Giornalismo",
      company: "Università La Sapienza, Roma",
      period: "2018",
    },
  ]

  return (
    <section
      id="education"
      className="py-12 px-6 sm:px-6 lg:px-12 bg-black flex flex-col items-center"
    >
      <h2 className="relative inline-block text-4xl font-bold text-white mb-12 pt-5 text-center">
        <span className="relative z-10 whitespace-nowrap">
          Istruzione & Formazione
        </span>
        <span className="absolute bottom-1 left-2 w-full h-3 bg-[#847352] z-0"></span>
      </h2>

      <div className="space-y-12 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Pallino */}
            <div className="mt-1 w-4 h-4 bg-[#D4CAB6] rounded-full flex-shrink-0"></div>

            {/* Contenuto */}
            <div className="text-left">
              {/* Period */}
              <p className="text-lg text-gray-50 mb-1 ">{exp.period}</p>

              {/* Title & Company */}
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-white mb-2 font-semibold">{exp.company}</p>

              {/* Activities */}
              <ul className="list-disc list-inside text-gray-50 space-y-1 text-lg font-semibold">
                {exp.skillsDeveloped && (
                  <ul className="list-disc list-inside text-gray-50 space-y-1 text-lg font-semibold">
                    {exp.skillsDeveloped.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
