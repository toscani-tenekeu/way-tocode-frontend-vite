"use client"

import PageTitle from "../components/common/PageTitle"
import ProjectCard from "../components/projects/ProjectCard"
import { useState, useEffect } from "react"
import type { Project } from "../types"

const PremiumPage = () => {
  const [premiumProjects, setPremiumProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPremiumProjects([
        {
          id: "1",
          title: "E-commerce Dashboard",
          description: "A comprehensive dashboard for managing online stores",
          isPremium: true,
          price: 29.99,
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "2",
          title: "Advanced Authentication System",
          description: "Complete authentication system with JWT, OAuth, and more",
          isPremium: true,
          price: 39.99,
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "3",
          title: "Real-time Chat Application",
          description: "Build a scalable chat app with WebSockets and React",
          isPremium: true,
          price: 49.99,
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "4",
          title: "AI-powered Content Generator",
          description: "Create a content generator using OpenAI API and React",
          isPremium: true,
          price: 59.99,
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="p-4 md:p-6">
      <PageTitle title="Premium Projects" description="Access exclusive, in-depth coding projects" />

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-2">Unlock Premium Content</h2>
        <p className="mb-4">
          Get access to our premium projects with complete source code, detailed explanations, and premium support.
        </p>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
          View Pricing Plans
        </button>
      </div>

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
          {premiumProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PremiumPage

