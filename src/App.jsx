import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import "./index.css"
import CustomFooter from "./components/CustomFooter"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
