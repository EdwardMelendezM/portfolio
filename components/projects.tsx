"use client"

import type React from "react"

import Image from "next/image"
import useModalStore from "@/hooks/use-modal-store"
import { projects } from "@/projects"
import { Separator } from "@/components/ui/separator"
import useLanguage from "@/hooks/use-languages"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink, Star, Code, Globe, Filter, Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export interface Project {
    title: {
        ES: string
        EN: string
    }
    image: string
    url: string
    isTop?: boolean
    technologies: string[]
    descriptions: {
        ES: string
        EN: string
    }[]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        y: -10,
        scale: 1.02,
        transition: {
            duration: 0.3,
        },
    },
}

interface ProjectCardProps {
    project: Project
    openModal: (project: Project) => void
    currentLanguage: string
    index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openModal, currentLanguage, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    
    const getText = (text: { ES: string; EN: string }) => {
        return text[currentLanguage as keyof typeof text] || text.EN
    }
    
    const getProjectCategory = (technologies: string[]) => {
        if (
          technologies.some((tech) => tech.toLowerCase().includes("react native") || tech.toLowerCase().includes("flutter"))
        ) {
            return { name: "Mobile", color: "from-green-500 to-emerald-500", icon: "📱" }
        }
        if (technologies.some((tech) => tech.toLowerCase().includes("next") || tech.toLowerCase().includes("react"))) {
            return { name: "Web App", color: "from-blue-500 to-cyan-500", icon: "🌐" }
        }
        if (
          technologies.some((tech) => tech.toLowerCase().includes("go") || tech.toLowerCase().includes("microservicio"))
        ) {
            return { name: "Backend", color: "from-purple-500 to-pink-500", icon: "⚙️" }
        }
        if (technologies.some((tech) => tech.toLowerCase().includes("cms") || tech.toLowerCase().includes("ecommerce"))) {
            return { name: "E-commerce", color: "from-orange-500 to-red-500", icon: "🛒" }
        }
        return { name: "Web", color: "from-gray-500 to-gray-600", icon: "💻" }
    }
    
    const category = getProjectCategory(project.technologies)
    
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${project.isTop ? "md:col-span-2 lg:col-span-1" : ""}`}
      >
          <Card className="group overflow-hidden border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-slate-800/95 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={getText(project.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Top Badge */}
                  {project.isTop && (
                    <motion.div
                      className="absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">{currentLanguage === "ES" ? "Destacado" : "Featured"}</span>
                    </motion.div>
                  )}
                  
                  {/* Category Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
            <span className="text-sm font-semibold flex items-center gap-1">
              <span>{category.icon}</span>
                {category.name}
            </span>
                  </motion.div>
                  
                  {/* Hover Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
                        onClick={(e) => {
                            e.stopPropagation()
                            openModal(project)
                        }}
                      >
                          <Search className="w-4 h-4 mr-2" />
                          {currentLanguage === "ES" ? "Ver más" : "View more"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 text-gray-900 hover:bg-white border-white/50 shadow-lg"
                        onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.url, "_blank")
                        }}
                      >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {currentLanguage === "ES" ? "Visitar" : "Visit"}
                      </Button>
                  </motion.div>
              </div>
              
              {/* Content Section */}
              <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {getText(project.title)}
                  </h3>
                  
                  {/* Description Preview */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.descriptions.length > 0 ? getText(project.descriptions[0]) : ""}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                            >
                                <Badge
                                  variant="secondary"
                                  className={`text-xs px-2 py-1 ${
                                    techIndex % 4 === 0
                                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                      : techIndex % 4 === 1
                                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                        : techIndex % 4 === 2
                                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                                          : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                                  }`}
                                >
                                    {tech}
                                </Badge>
                            </motion.div>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs px-2 py-1">
                                +{project.technologies.length - 4}
                            </Badge>
                          )}
                      </div>
                  </div>
                  
                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Code className="w-4 h-4" />
                          <span>{project.technologies.length} tecnologías</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            onClick={() => openModal(project)}
                          >
                              {currentLanguage === "ES" ? "Detalles" : "Details"}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                            onClick={() => window.open(project.url, "_blank")}
                          >
                              <Globe className="w-4 h-4" />
                          </Button>
                      </div>
                  </div>
              </CardContent>
          </Card>
      </motion.div>
    )
}

const EnhancedProjects: React.FC = () => {
    const router = useRouter()
    const openModal = useModalStore((state) => state.openModal)
    const currentLanguage = useLanguage((state) => state.language)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedFilter, setSelectedFilter] = useState("all")
    
    const getText = (text: { ES: string; EN: string }) => {
        return text[currentLanguage as keyof typeof text] || text.EN
    }
    
    const mappedProjects = projects.map((project) => ({
        ...project,
        // Keep the original bilingual structure for filtering and other uses
        mappedTitle: getText(project.title),
        mappedDescriptions: project.descriptions.map((description) => getText(description)),
    }))
    
    const filteredProjects = mappedProjects.filter((project) => {
        const matchesSearch =
          project.mappedTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        
        if (selectedFilter === "all") return matchesSearch
        if (selectedFilter === "featured") return matchesSearch && project.isTop
        if (selectedFilter === "web")
            return (
              matchesSearch &&
              project.technologies.some((tech) => tech.toLowerCase().includes("next") || tech.toLowerCase().includes("react"))
            )
        if (selectedFilter === "mobile")
            return (
              matchesSearch &&
              project.technologies.some(
                (tech) => tech.toLowerCase().includes("react native") || tech.toLowerCase().includes("flutter"),
              )
            )
        
        return matchesSearch
    })
    
    const filters = [
        { key: "all", label: currentLanguage === "ES" ? "Todos" : "All" },
        { key: "featured", label: currentLanguage === "ES" ? "Destacados" : "Featured" },
        { key: "web", label: "Web Apps" },
        { key: "mobile", label: "Mobile" },
    ]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              {/* Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-transparent bg-clip-text">
              {currentLanguage === "ES" ? "Mis Proyectos" : "My Projects"}
            </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      {currentLanguage === "ES"
                        ? "Una colección de proyectos que demuestran mis habilidades y experiencia"
                        : "A collection of projects showcasing my skills and experience"}
                  </p>
                  <Separator className="mt-6 w-24 mx-auto bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full" />
              </motion.div>
              
              {/* Back Button */}
              <motion.div
                className="mb-12 flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
                onClick={() => router.back()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                  <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition-colors" />
                  <p className="group-hover:text-orange-500 text-gray-500 dark:text-gray-400 font-medium transition-colors">
                      {currentLanguage === "ES" ? "Regresar" : "Back"}
                  </p>
              </motion.div>
              
              {/* Search and Filters */}
              <motion.div
                className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                  <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder={currentLanguage === "ES" ? "Buscar proyectos..." : "Search projects..."}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg"
                      />
                  </div>
                  <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <div className="flex gap-2">
                          {filters.map((filter) => (
                            <Button
                              key={filter.key}
                              size="sm"
                              variant={selectedFilter === filter.key ? "default" : "outline"}
                              onClick={() => setSelectedFilter(filter.key)}
                              className={`${
                                selectedFilter === filter.key
                                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0"
                                  : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0"
                              }`}
                            >
                                {filter.label}
                            </Button>
                          ))}
                      </div>
                  </div>
              </motion.div>
              
              {/* Projects Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={{
                          ...project,
                      }}
                      openModal={openModal}
                      currentLanguage={currentLanguage}
                      index={index}
                    />
                  ))}
              </motion.div>
              
              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                        {currentLanguage === "ES" ? "No se encontraron proyectos" : "No projects found"}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        {currentLanguage === "ES"
                          ? "Intenta con otros términos de búsqueda o filtros"
                          : "Try different search terms or filters"}
                    </p>
                </motion.div>
              )}
              
              {/* Stats Footer */}
              <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text mb-2">
                          {/*{projects.length}+*/}
                          20+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Proyectos" : "Projects"}
                      </div>
                  </Card>
                  
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-2">
                          {projects.filter((p) => p.isTop).length}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Destacados" : "Featured"}
                      </div>
                  </Card>
                  
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-2">
                          20+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Tecnologías" : "Technologies"}
                      </div>
                  </Card>
                  
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
                          5+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Años" : "Years"}
                      </div>
                  </Card>
              </motion.div>
          </div>
      </div>
    )
}

export default EnhancedProjects
