import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Github, Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["About", "Skills", "Projects", "Contact"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-slate-800/80 backdrop-blur-sm z-50 shadow-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <span className="text-2xl font-bold text-cyan-400">OS</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-lg font-bold gap-8 text-cyan-400">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          
            <div className="flex gap-4 ml-4 text-cyan-400">
              <a href="https://www.linkedin.com/in/oyewusi-samuel-8a3472302" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-cyan-200 transition-colors" />
              </a>
              <a href="https://github.com/funso1234" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-cyan-200 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 border-t border-slate-600 mt-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}

                  {/* Mobile Social Links */}
                  <div className="flex flex-col gap-6 pt-4 px-2">
                    <a
                      href="https://www.linkedin.com/in/oyewusi-samuel-8a3472302"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/funso1234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
