const WorkExperience = () => {
  const experiences = [
    {
      title: "Sviluppatore Full Stack",
      company: "IoT Tecnologie - Focelda SpA",
      period: "ott 2025 - attuale",
      activities: [
        "Contribuisco allo sviluppo e alla manutenzione del gestionale aziendale Nex, utilizzato per la gestione dei processi interni",
        "Implemento funzionalità frontend e backend utilizzando React e TypeScript",
        "Sviluppo e aggiorno interfacce utente e layout in base ai requisiti funzionali",
        "Gestisco dati e integrazioni tramite MongoDB",
        "Utilizzo strumenti come Docker per la gestione degli ambienti di sviluppo",
        "Collaboro con il team tecnico per l’analisi e l’implementazione delle soluzioni",
        "Contribuisco al miglioramento dell’esperienza utente, portando competenze pregresse in ambito UX",
      ],
    },
    {
      title: "Operatrice Multimediale",
      company:
        "SSI Factory – per il Ministero dell’Economia e delle Finanze (MEF), Roma",
      period: "2019 - 2024",
      activities: [
        "Ottimizzazione dei portali istituzionali in termini di accessibilità, usabilità e responsive design",
        "Verifica della conformità agli standard WCAG",
        "Analisi UX e miglioramento dell'esperienza utente e dei flussi di navigazione",
        "Gestione contenuti MEF (OpenCms, HTML, CSS, Bootstrap)",
        "Coordinamento operativo e formazione delle nuove risorse",
        "Collaborazione con team multidisciplinari in contesti complessi della Pubblica Amministrazione",
      ],
    },
    {
      title: "Social Media Manager, Copywriter & WebDesigner",
      company: "Nagency srl, Roma",
      period: "2018 - 2019",
      activities: [
        "Realizzazione e personalizzazione di siti web responsive con WordPress, HTML e CSS",
        "Redazione di articoli per blog e aree news",
        "Scrittura di copy per pagine web, landing page, contenuti digitali e canali social",
        "Ottimizzazione SEO dei contenuti pubblicati",
        "Collaborazione con clienti e team interni per la definizione delle strategie di comunicazione digitale",
      ],
    },
  ]

  return (
    <section
      id="work-experience"
      className="py-12 px-6 sm:px-6 lg:px-12 bg-gray-50 flex flex-col items-center"
    >
      <h2 className="relative inline-block text-4xl font-bold text-black mb-12 pt-5 text-center">
        <span className="relative z-10 whitespace-nowrap">
          Esperienze lavorative
        </span>
        <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
      </h2>

      <div className="space-y-12 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="mt-1 w-4 h-4 bg-[#D4CAB6] rounded-full flex-shrink-0"></div>

            <div className="text-left">
              <p className="text-lg text-gray-500 mb-1 ">{exp.period}</p>

              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-700 mb-2 font-semibold">{exp.company}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-1 text-lg font-semibold">
                {exp.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
