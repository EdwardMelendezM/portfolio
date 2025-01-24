'use client'

import Image from "next/image";

import useModalStore from "@/hooks/use-modal-store";
import { projects } from "@/projects";
import { Separator } from "@/components/ui/separator";
import useLanguage from "@/hooks/use-languages";
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export interface Project {
    title: string
    image: string
    url: string
    isTop?: boolean
    technologies: string[]
    descriptions: string[]
}

const Projects: React.FC = () => {
    const router = useRouter()
    const openModal = useModalStore((state) => state.openModal)
    const currentLanguage = useLanguage((state) => state.language)

    const mappedProjects = projects.map((project) => ({
        ...project,
        title: project.title[currentLanguage],
        descriptions: project.descriptions.map((description) => description[currentLanguage]),
    }))

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    className="text-4xl font-extrabold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                        {currentLanguage === "ES" ? "Proyectos" : "Projects"}
                    </span>
                </motion.h1>
                <Separator className="mb-4" />
                <div className="mb-10 flex items-center gap-2 group cursor-pointer"
                    onClick={() => router.back()}
                >
                    {/* Icono */}
                    <ArrowLeft className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <p className="group-hover:underline text-gray-500 dark:text-gray-400">
                        {currentLanguage === "ES" ? "Regresar" : "Back"}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mappedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            openModal={openModal}
                            currentLanguage={currentLanguage}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ProjectCardProps {
    project: Project
    openModal: (project: Project) => void
    currentLanguage: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openModal, currentLanguage }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="overflow-hidden cursor-pointer group" onClick={() => openModal(project)}>
                <div className="relative h-64 w-full">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-transform duration-300 transform flex items-center justify-center group-hover:scale-110 ">
                        <p className="text-white font-semibold text-lg">
                            {currentLanguage === "ES" ? "Ver más" : "See more"}
                        </p>
                    </div>
                    {project.isTop && (
                        <div className="absolute top-2 right-2 bg-yellow-600 rounded-xl text-gray-100">
                            <p className="text-xs font-semibold px-2 py-1">
                                {currentLanguage === "ES" ? "Destacado" : "Top"}
                            </p>
                        </div>
                    )}

                </div>
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded-full">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default Projects
