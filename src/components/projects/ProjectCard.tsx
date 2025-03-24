import type { Project } from "../../types"
import { ArrowRight, Lock } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex justify-between items-center">
          <a href={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
            View More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          {project.isPremium && (
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
              Buy Now ${project.price}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

