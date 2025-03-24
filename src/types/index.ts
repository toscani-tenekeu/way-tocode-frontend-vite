// Project types
export interface Project {
  id: string
  title: string
  description: string
  price: number
  features: string[]
  isPremium: boolean
  imageUrl: string
}

// Tutorial types
export interface Tutorial {
  id: string
  title: string
  description: string
  category: string
  level: string
  imageUrl: string
}

// CV Builder types
export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  address: string
  title: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  graduationDate: string
}

export interface CVData {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: string[]
}

