const WorkExperience = () => {
  const experiences = [
    {
      title: "Operatrice Multimediale",
      company:
        "SSI Factory – per il Ministero dell’Economia e delle Finanze (MEF), Roma",
      period: "2019 - 2024",
      activities: [
        "Coordinamento team, formazione nuove risorse",
        "Gestione contenuti MEF (OpenCms, HTML, CSS, Bootstrap)",
        "Ottimizzazione usabilità e accessibilità WCAG",
      ],
    },
    {
      title: "Social Media Manager, Copywriter & WebDesigner",
      company: "Nagency srl, Roma",
      period: "2018 - 2019",
      activities: [
        "Creazione siti WordPress responsive",
        "Progettazione grafica e contenuti social",
        "SEO e manutenzione con FileZilla",
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
