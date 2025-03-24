import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ProjectsPage from "./pages/ProjectsPage"
import TutorialsPage from "./pages/TutorialsPage"
import PremiumPage from "./pages/PremiumPage"
import CVBuilderPage from "./pages/CVBuilderPage"
import About from './pages/About'
import FAQ from './pages/FAQ'
import CookiePolicy from './pages/CookiePolicy'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import ToscaPage from './pages/ToscaPage'
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/cv-builder" element={<CVBuilderPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tosca" element={<ToscaPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

