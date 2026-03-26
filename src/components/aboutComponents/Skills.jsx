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
                "TypeScript (Node.js)",
                "Java, Spring Boot",
                "REST API design",
                "MongoDB, mongosh",
                "PostgreSQL, JPA",
                "JWT Authentication",
                "Middleware & request handling",
                "Data modeling (SQL & NoSQL)",
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
                "JavaScript",
                "Bootstrap - Tailwind",
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
              <span className="relative z-10 whitespace-nowrap">UX, Usabilità & Accessibilità</span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {["Principi di UX Design,
                "Responsive design e ottimizzazione multi-dispositivo",
                "Usabilità e progettazione user-centered", 
                "Accessibilità (WCAG 2.2)", 
                "Testing con screen reader (NVDA)",
                "Strumenti: WAVE, TotalValidator"].map((skill) => (
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
                Tools & Dev Environment
              </span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {["Git, GitHub", "Docker", "Postman", "Intelliji, VS Code"].map((skill) => (
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
                Deploy & CMS
              </span>
              <span className="absolute bottom-1 left-2 w-full h-2 bg-[#D4CAB6] z-0"></span>
            </h4>
            <ul className="flex flex-wrap gap-4 list-none">
              {[
                "Vercel",
                "Koyeb",
                "WordPress",
                "OpenCMS",
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
