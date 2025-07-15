import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contacts"
import About from "./components/About"
import ContactInfo from "./components/ContactInfo"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactInfo />
      <Contact />
    </div>
  )
}

export default App
