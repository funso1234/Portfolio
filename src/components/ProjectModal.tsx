import { motion, AnimatePresence } from "framer-motion"

interface Project {
  title: string
  problem: string
  solution: string
  impact: string
  details: string
  tools: string[]
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-slate-800 p-8 rounded-xl max-w-2xl w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl">
            &times;
          </button>

          <h3 className="text-3xl font-bold mb-4 text-cyan-400">{project.title}</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">Problem Statement</h4>
              <p className="text-gray-300">{project.problem}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">Solution Developed</h4>
              <p className="text-gray-300">{project.solution}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">Key Impact</h4>
              <p className="text-gray-300">{project.impact}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-2">Technical Details</h4>
              <p className="text-gray-300">{project.details}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
