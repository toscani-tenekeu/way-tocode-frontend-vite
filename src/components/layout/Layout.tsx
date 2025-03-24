"use client"

import { type ReactNode, useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useMediaQuery } from "../../hooks/useMediaQuery"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - now relative position for desktop */}
      <div className={`${isMobile ? "fixed z-20" : "relative"} h-full`}>
        <Sidebar isOpen={isMobile ? sidebarOpen : true} onClose={closeSidebar} />
      </div>

      {/* Main content - with left margin to accommodate sidebar on desktop */}
      <div className={`flex flex-col flex-1 ${isMobile ? "w-full" : "ml-64"} overflow-hidden`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout

