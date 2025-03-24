"use client"

import ProjectCard from "../components/projects/ProjectCard"
import PageTitle from "../components/common/PageTitle"
import { useState, useEffect } from "react"
import type { Project } from "../types"

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects([
        {
          id: "1",
          title: "React Todo App",
          description: "A simple todo application built with React and TypeScript",
          isPremium: false,
          imageUrl: "/placeholder.svg?height=200&width=300",
          price: 0,
          features: []
        },
        {
          id: "2",
          title: "E-commerce Dashboard",
          description: "A comprehensive dashboard for managing online stores",
          isPremium: true,
          price: 5000,
          imageUrl: "/placeholder.svg?height=200&width=300",
          features: []
        },
        {
          id: "3",
          title: "Weather App",
          description: "Real-time weather application with geolocation",
          isPremium: false,
          imageUrl: "/placeholder.svg?height=200&width=300",
          price: 9500,
          features: []
        },
        {
          id: "4",
          title: "Advanced Authentication System",
          description: "Complete authentication system with JWT, OAuth, and more",
          isPremium: true,
          price: 3000,
          imageUrl: "/placeholder.svg?height=200&width=300",
          features: []
        },
      ])
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="p-4 md:p-6">
      <PageTitle title="Projects" description="Explore our coding projects" />

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectsPage

