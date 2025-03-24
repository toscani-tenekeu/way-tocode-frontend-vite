import type { Tutorial } from "../../types"
import { ArrowRight } from "lucide-react"

interface TutorialCardProps {
  tutorial: Tutorial
}

const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img src={tutorial.imageUrl || "/placeholder.svg"} alt={tutorial.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-bold">
          {tutorial.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{tutorial.title}</h3>
        <p className="text-gray-600 mb-4">{tutorial.description}</p>

        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
            {tutorial.level}
          </span>

          <a href={`/tutorials/${tutorial.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
            Read Tutorial
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TutorialCard

