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
          title: "E-commerce Platform",
          description: "Complete e-commerce solution with payment integration",
          price: 75000,
          features: ["Admin Dashboard", "Payment Integration", "Inventory Management"],
          imageUrl: "",
          isPremium: true
        },
        {
          id: "2",
          title: "School Management System",
          description: "Comprehensive school management solution",
          price: 100000,
          features: ["Student Portal", "Grade Management", "Attendance Tracking"],
          imageUrl: "",
          isPremium: true
        },
        {
          id: "3",
          title: "Real Estate Management",
          description: "Property listing and management system",
          price: 85000,
          features: ["Property Listings", "Agent Portal", "Lead Management"],
          imageUrl: "",
          isPremium: true
        },
        {
          id: "4",
          title: "Hospital Management System",
          description: "Complete healthcare management solution",
          price: 150000,
          features: ["Patient Records", "Appointment System", "Billing Management"],
          imageUrl: "",
          isPremium: true
        },
        {
          id: "5",
          title: "Restaurant Management",
          description: "Full restaurant operations management system",
          price: 65000,
          features: ["Order Management", "Kitchen Display", "Inventory Control"],
          imageUrl: "",
          isPremium: true
        },
        {
          id: "6",
          title: "HR Management System",
          description: "Employee and HR process management",
          price: 90000,
          features: ["Employee Portal", "Leave Management", "Payroll System"],
          imageUrl: "",
          isPremium: true
        }
      ])
      setLoading(false)
    }, 3000)
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

