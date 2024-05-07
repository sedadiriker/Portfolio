import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Project from "../pages/Project"
import Contact from "../pages/Contact"

const AppRouter = () => {
  return (
    <Router>
            <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
