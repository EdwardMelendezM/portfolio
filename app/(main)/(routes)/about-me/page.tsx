"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { mePhoto } from "@/projects"
import { motion } from "framer-motion"
import { Code, Server, Terminal } from "lucide-react"

const AboutMePage: React.FC = () => {
    const [language, setLanguage] = useState<"ES" | "EN">("ES")

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ES" ? "EN" : "ES"))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-end mb-8">
                    <button
                        onClick={toggleLanguage}
                        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                    >
                        {language === "ES" ? "EN" : "ES"}
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <Image
                                className="h-96 w-full object-cover md:w-96"
                                src={mePhoto || "/placeholder.svg"}
                                alt="Profile Picture"
                                width={384}
                                height={384}
                            />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">
                                {language === "ES" ? "Hola, soy" : "Hello, I am"}
                            </div>
                            <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                Edward Melendez
                            </h1>
                            <p className="mt-2 text-xl text-gray-500 dark:text-gray-300 leading-8">
                                {language === "ES" ? "Ingeniero de Software" : "Software Engineer"}
                            </p>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                {language === "ES"
                                    ? "Experto en desarrollo web, móvil y DevOps"
                                    : "Expert in web development, mobile, and DevOps"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                    <SkillCard
                        href="/professional-experience"
                        icon={Code}
                        title={language === "ES" ? "EXPERIENCIA" : "EXPERIENCE"}
                        value="4+"
                        color="purple"
                    />
                    <SkillCard
                        href="/projects"
                        icon={Terminal}
                        title={language === "ES" ? "PROYECTOS" : "PROJECTS"}
                        value="20+"
                        color="orange"
                    />
                    <SkillCard href="/skills" icon={Server} title="SKILLS" value="10+" color="blue" />
                </div>
            </div>
        </div>
    )
}

interface SkillCardProps {
    href: string
    icon: React.ElementType
    title: string
    value: string
    color: "purple" | "orange" | "blue"
}

const SkillCard: React.FC<SkillCardProps> = ({ href, icon: Icon, title, value, color }) => {
    const colorClasses = {
        purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
        orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
        blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    }

    return (
        <Link href={href}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col overflow-hidden rounded-lg shadow-lg bg-gradient-to-r ${colorClasses[color]}`}
            >
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-semibold text-white">{title}</p>
                            <Icon className="h-6 w-6 text-white" />
                        </div>
                        <p className="mt-3 text-4xl font-bold text-white">{value}</p>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default AboutMePage

