"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { EyeIcon, X, ExternalLink, Code, Calendar, Users, Star, Github } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"
import useModalStore from "@/hooks/use-modal-store"
import useLanguage from "@/hooks/use-languages"

const EnhancedProjectModal: React.FC = () => {
    const { isOpen, project, onClose } = useModalStore()
    const currentLanguage = useLanguage((state) => state.language)
    
    if (!project) return null
    
    const getText = (text: { ES: string; EN: string }) => {
        return text[currentLanguage as keyof typeof text] || text.EN
    }
    
    const getProjectCategory = (technologies: string[]) => {
        if (
          technologies.some((tech) => tech.toLowerCase().includes("react native") || tech.toLowerCase().includes("flutter"))
        ) {
            return { name: "Mobile App", color: "from-green-500 to-emerald-500", icon: "📱" }
        }
        if (technologies.some((tech) => tech.toLowerCase().includes("next") || tech.toLowerCase().includes("react"))) {
            return { name: "Web Application", color: "from-blue-500 to-cyan-500", icon: "🌐" }
        }
        if (
          technologies.some((tech) => tech.toLowerCase().includes("go") || tech.toLowerCase().includes("microservicio"))
        ) {
            return { name: "Backend System", color: "from-purple-500 to-pink-500", icon: "⚙️" }
        }
        if (technologies.some((tech) => tech.toLowerCase().includes("cms") || tech.toLowerCase().includes("ecommerce"))) {
            return { name: "E-commerce Platform", color: "from-orange-500 to-red-500", icon: "🛒" }
        }
        return { name: "Web Project", color: "from-gray-500 to-gray-600", icon: "💻" }
    }
    
    const category = getProjectCategory(project.technologies)
    
    return (
      <AnimatePresence>
          {isOpen && (
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="p-0 overflow-hidden max-w-6xl max-h-[90vh] overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative"
                    >
                        {/* Header with Image */}
                        <div className="relative w-full h-80 md:h-96 overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={getText(project.title)}
                              fill
                              className="object-cover"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            
                            {/* Close Button */}
                            {/*<Button*/}
                            {/*  onClick={onClose}*/}
                            {/*  variant="ghost"*/}
                            {/*  size="sm"*/}
                            {/*  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"*/}
                            {/*>*/}
                            {/*    <X className="w-4 h-4" />*/}
                            {/*</Button>*/}
                            
                            {/* Featured Badge */}
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
                              className={`absolute bottom-4 left-4 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full shadow-lg`}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <span>{category.icon}</span>
                      {category.name}
                  </span>
                            </motion.div>
                            
                            {/* Title Overlay */}
                            <div className="absolute bottom-4 right-4 text-right">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                    {getText(project.title)}
                                </h1>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8">
                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <Button
                                  asChild
                                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg"
                                >
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        {currentLanguage === "ES" ? "Ver Proyecto" : "View Project"}
                                    </Link>
                                </Button>
                                
                                <Button
                                  variant="outline"
                                  className="border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 bg-transparent"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    {currentLanguage === "ES" ? "Ver Código" : "View Code"}
                                </Button>
                            </div>
                            
                            {/* Technologies Section */}
                            <Card className="mb-8 border-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Code className="w-5 h-5 text-blue-600" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {currentLanguage === "ES" ? "Tecnologías Utilizadas" : "Technologies Used"}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, index) => (
                                          <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                          >
                                              <Badge
                                                variant="secondary"
                                                className={`px-3 py-2 text-sm font-medium border-2 transition-all duration-300 ${
                                                  index % 4 === 0
                                                    ? "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700"
                                                    : index % 4 === 1
                                                      ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700"
                                                      : index % 4 === 2
                                                        ? "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-700"
                                                        : "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-700"
                                                }`}
                                              >
                                                  {tech}
                                              </Badge>
                                          </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            
                            {/* Project Details */}
                            <Card className="mb-8 border-0 bg-white dark:bg-gray-800 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Users className="w-5 h-5 text-green-600" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {currentLanguage === "ES" ? "Detalles del Proyecto" : "Project Details"}
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        {project.descriptions.map((description, index) => (
                                          <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="flex items-start gap-3"
                                          >
                                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{getText(description)}</p>
                                          </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            
                            {/* Project Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <Card className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-0">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">{project.technologies.length}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {currentLanguage === "ES" ? "Tecnologías" : "Technologies"}
                                    </div>
                                </Card>
                                
                                <Card className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0">
                                    <div className="text-2xl font-bold text-green-600 mb-1">{project.descriptions.length}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {currentLanguage === "ES" ? "Características" : "Features"}
                                    </div>
                                </Card>
                                
                                <Card className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">{project.isTop ? "⭐" : "✨"}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {project.isTop
                                          ? currentLanguage === "ES"
                                            ? "Destacado"
                                            : "Featured"
                                          : currentLanguage === "ES"
                                            ? "Proyecto"
                                            : "Project"}
                                    </div>
                                </Card>
                            </div>
                            
                            <Separator className="my-6" />
                            
                            {/* Footer Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                      {currentLanguage === "ES"
                        ? "Proyecto desarrollado con tecnologías modernas"
                        : "Project built with modern technologies"}
                    </span>
                                </div>
                                
                                <div className="flex gap-3">
                                    <Button
                                      variant="outline"
                                      onClick={onClose}
                                      className="border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 bg-transparent"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        {currentLanguage === "ES" ? "Cerrar" : "Close"}
                                    </Button>

                                    { project.url && (
                                        <Button
                                            asChild
                                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0"
                                        >
                                            <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                <EyeIcon className="w-4 h-4 mr-2" />
                                                {currentLanguage === "ES" ? "Ver en Vivo" : "View Live"}
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </DialogContent>
            </Dialog>
          )}
      </AnimatePresence>
    )
}

export default EnhancedProjectModal
