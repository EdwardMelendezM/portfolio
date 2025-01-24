"use client"

import React from "react"
import ExperienceCard from "@/components/experence-card"
import { Separator } from "@/components/ui/separator"
import { experiences } from "@/projects"
import { motion } from "framer-motion"
import useLanguage from "@/hooks/use-languages"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const ProfessionalExperiencePage = () => {
    const router = useRouter()
    const currentLanguage = useLanguage((state) => state.language)
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                        {currentLanguage === "ES" ? "Experiencia Profesional" : "Professional Experience"}
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
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            title={experience.title}
                            company={experience.company}
                            duration={experience.duration}
                            description={experience.description}
                            badges={experience.badges}
                            language={currentLanguage}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperiencePage

