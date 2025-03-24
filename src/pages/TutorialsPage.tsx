"use client"

import PageTitle from "../components/common/PageTitle"
import TutorialCard from "../components/tutorials/TutorialCard"
import { useState, useEffect } from "react"
import type { Tutorial } from "../types"

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTutorials([
        {
          id: "1",
          title: "Getting Started with React",
          description: "Learn the basics of React and build your first component",
          category: "React",
          level: "Beginner",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "2",
          title: "TypeScript for React Developers",
          description: "Master TypeScript to build type-safe React applications",
          category: "TypeScript",
          level: "Intermediate",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "3",
          title: "State Management with Redux",
          description: "Learn how to manage complex state with Redux",
          category: "Redux",
          level: "Advanced",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "4",
          title: "Building APIs with Node.js",
          description: "Create RESTful APIs using Node.js and Express",
          category: "Node.js",
          level: "Intermediate",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="p-4 md:p-6">
      <PageTitle title="Tutorials" description="Learn coding with our step-by-step guides" />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 h-64 animate-pulse">
              <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TutorialsPage

