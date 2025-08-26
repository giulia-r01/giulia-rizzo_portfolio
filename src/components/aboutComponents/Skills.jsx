const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 px-6 sm:px-6 lg:px-12 bg-white flex flex-col items-center"
    >
      <h2 className="relative inline-block text-4xl font-bold text-black mb-16 pt-5 text-center">
        <span className="relative z-10 whitespace-nowrap">Skills</span>
        <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
      </h2>

      <div className="w-full max-w-5xl mb-20">
        <h3 className="relative inline-block text-3xl font-bold text-black mb-12 pt-5">
          <span className="relative z-10 whitespace-nowrap">Hard Skills</span>
          <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="relative inline-block text-2xl font-bold text-black mb-8">
              <span className="relative z-10 whitespace-nowrap">Backend</span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {[
                "Java",
                "Spring Boot",
                "JPA",
                "PostgreSQL",
                "REST API",
                "JWT",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative inline-block text-2xl font-bold text-black mb-8">
              <span className="relative z-10 whitespace-nowrap">Frontend</span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {[
                "React",
                "Redux Toolkit",
                "Vite",
                "TypeScript",
                "Bootstrap",
                "Tailwind",
                "HTML5 - CSS3",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative inline-block text-2xl font-bold text-black mb-8">
              <span className="relative z-10 whitespace-nowrap">Tools</span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {["Git - GitHub", "Postman", "IntelliJ", "VSC"].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative inline-block text-2xl font-bold text-black mb-8">
              <span className="relative z-10 whitespace-nowrap">
                CMS / Deploy
              </span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {["OpenCMS", "WordPress", "Vercel", "Koyeb"].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative inline-block text-2xl font-bold text-black mb-8">
              <span className="relative z-10 whitespace-nowrap">
                Accessibilità
              </span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {[
                "WCAG 2.2",
                "TotalValidator tool",
                "NVDA - WAVE",
                "Responsive Design",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <h3 className="relative inline-block text-4xl font-bold text-black mb-12 pt-5">
          <span className="relative z-10 whitespace-nowrap">Soft Skills</span>
          <span className="absolute bottom-1 left-2 w-full h-3 bg-[#D4CAB6] z-0"></span>
        </h3>
        <ul className="flex flex-wrap gap-4 list-none">
          {[
            "Team Leadership",
            "Problem Solving",
            "Proattività",
            "Flessibilità",
            "Comunicazione",
            "Gestione del tempo",
          ].map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 bg-[#D4CAB6] text-black rounded font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
