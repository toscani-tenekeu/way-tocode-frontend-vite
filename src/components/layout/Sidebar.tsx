import { Link, useLocation } from "react-router-dom"
import { FolderIcon, BookOpenIcon, DiamondIcon, FileTextIcon, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose?: () => void // Add onClose prop
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation()

  const navItems = [
    { path: "/projects", name: "Projects", icon: FolderIcon },
    { path: "/tutorials", name: "Tutorials", icon: BookOpenIcon },
    { path: "/premium", name: "Premium", icon: DiamondIcon },
    { path: "/cv-builder", name: "CV Builder", icon: FileTextIcon },
  ]

  return (
    <aside
      className={`bg-gray-900 text-white w-64 fixed h-full transition-all duration-300 ease-in-out z-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Add close button - visible only on mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-800 md:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        <Link to="/" className="flex items-center mb-6">
          <div className="w-10 h-10 mr-3 rounded bg-black flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-23%20at%2023.21.54_763f6464.jpg-VxDJNv8lpNZT1feip4b8pLJspEpspn.jpeg"
              alt="Way to Code Logo"
              className="w-8 h-8"
            />
          </div>
          <span className="text-xl font-bold">Way to Code</span>
        </Link>

        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose} // Close sidebar when clicking a link on mobile
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path ? "bg-gray-800 text-green-400" : "hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Add footer section */}
        <div className="mt-auto pt-6 border-t border-gray-800 text-sm">
          <div className="space-y-2">
            <Link to="/about" className="block hover:text-green-400">About Us</Link>
            <Link to="/faq" className="block hover:text-green-400">FAQ</Link>
            <Link to="/cookie-policy" className="block hover:text-green-400">Cookie Policy</Link>
            <Link to="/terms" className="block hover:text-green-400">Terms of Use</Link>
            <Link to="/privacy" className="block hover:text-green-400">Privacy Policy</Link>
          </div>
          <div className="mt-4 text-gray-400 text-xs space-y-1">
            <span className="flex flex-row gap-2">Contact: <a href="mailto:toscanisoft@gmail.com" className="block hover:text-green-400">toscanisoft@gmail.com</a></span>
            <p className="mt-2">© {new Date().getFullYear()} Way to Code. All rights reserved.</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

