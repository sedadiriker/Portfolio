import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
