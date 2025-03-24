import type { Project } from "../../types"
import { ArrowRight, Lock, Download } from "lucide-react"
import { formatPrice } from '../../utils/format'
import Button from "../common/Button"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
        {project.isPremium && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <Lock className="w-3 h-3 mr-1" />
            Premium
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="space-y-4">
          {project.isPremium ? (
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => console.log(`Buy ${project.title}`)}
            >
              <span>Buy Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              variant="tertiary" 
              fullWidth
              onClick={() => console.log(`Download ${project.title}`)}
            >
              <span>Download for Free</span>
              <Download className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

