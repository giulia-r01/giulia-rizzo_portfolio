import { useEffect, useState } from "react"
import Bio from "./aboutComponents/Bio"
import Projects from "./Projects"
import { HashLink } from "react-router-hash-link"
import Contacts from "./Contacts"

const Home = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section
        className="flex flex-col items-center bg-black py-20 px-6 sm:px-6 lg:px-12"
        id="home"
      >
        <h1 className="sr-only">Portfolio di Giulia Rizzo</h1>
        <h2 className="relative text-4xl font-bold text-white mb-8 pt-5">
          <span className="relative z-10">About Me</span>
          <span className="absolute bottom-1 left-2 w-full h-3 bg-[#847352] z-0"></span>
        </h2>
        <Bio showButton={true} />
      </section>
      <Projects />
      <Contacts />
      {showButton && (
        <HashLink
          smooth
          to="#top"
          aria-label="Torna su"
          className="fixed bottom-8 right-8 p-3 bg-[#D4CAB6] text-black rounded-full shadow-lg hover:bg-[#c2b79d] transition flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
          <span className="sr-only">Torna su</span>
        </HashLink>
      )}
    </>
  )
}
export default Home
