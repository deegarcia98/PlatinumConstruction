import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutView  from './views/AboutView'
import ContactView from './views/ContactView'
import ProjectView from './views/ProjectsView'
import HomeView from './views/HomeView'

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/projects" element={<ProjectView />} />
      </Routes>
    </Router>
    </>
  )
}

export default App


