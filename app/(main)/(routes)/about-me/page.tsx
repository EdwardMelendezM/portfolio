"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { mePhoto } from "@/projects"
import { motion } from "framer-motion"
import { Code, Server, Terminal, Award, LinkedinIcon, GithubIcon } from "lucide-react"
import { ModeToggle } from "@/components/button-theme"
import useLanguage from "@/hooks/use-languages"
import { Badge } from "@/components/ui/badge"

const AboutMePage: React.FC = () => {

    const setLanguageGlobal = useLanguage((state) => state.setLanguage)
    const currentLanguage = useLanguage((state) => state.language)
    const [language, setLanguage] = useState<"ES" | "EN">(currentLanguage)

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "ES" : "EN"))
        setLanguageGlobal(language == "EN" ? "ES" : "EN")
    }

    const openGithub = () => {
        window.open("https://github.com/EdwardMelendezM", "_blank")
    }

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/edward-melendez-b23570281/", "_blank")
    }

    const onScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight, // Altura total del documento
            behavior: "smooth", // Scroll suave
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-end mb-8">
                    <button
                        onClick={toggleLanguage}
                        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 outline-none ring-2 ring-purple-500 dark:ring-purple-400"
                    >
                        {language === "ES" ? "EN" : "ES"}
                    </button>
                    <ModeToggle />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
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
                                <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
                                    {language === "ES"
                                        ? "Ingeniero de software con más de 4 años de experiencia. He trabajado en proyectos de gran tamaño en el campo del desarrollo web, móvil y de API. También tengo experiencia trabajando en entornos remotos y de oficina. Siempre me esfuerzo por asumir la responsabilidad del proyecto y entregar resultados más rápido de lo esperado."
                                        : "Software engineer with 4+ years of experience. I have worked on big-sized projects in the field of web, mobile, and API development. I am also experienced in working both remotely and in-office environments. I always strive to take ownership of the project and deliver results faster than expected."}
                                </p>
                                <div className="pt-5">
                                    <p className="text-lg text-gray-900 dark:text-white">
                                        {language === "ES"
                                            ? "Experto en:"
                                            : "Expert in:"}
                                    </p>
                                    <div className="flex gap-2 mt-2">
                                        <Badge>
                                            {language === "ES" ? "Web" : "Web"}
                                        </Badge>
                                        <Badge>
                                            {language === "ES" ? "Móvil" : "Mobile"}
                                        </Badge>
                                        <Badge>
                                            {language === "ES" ? "API" : "API"}
                                        </Badge>
                                        <Badge>
                                            {language === "ES" ? "Cloud" : "Cloud"}
                                        </Badge>
                                    </div>
                                    <div className="mt-4">
                                        <a
                                            className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                                            onClick={onScrollToBottom}
                                        >
                                            {language === "ES" ? "¡Contáctame! ✨" : "Contact Me! ✨"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
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
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="mt-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            {language === "ES" ? "Reconocimientos" : "Awards"}
                        </h2>
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            <AwardCard
                                title={language === "ES" ? "1er Lugar En El Concurso de Buenas Prácticas de Calidad" : "1st Place in Quality Best Practices Contest"}
                                organization="UNSAAC"
                                year="2023"
                                description={
                                    language === "ES"
                                        ? "Resentamos Scheduler Pro, una solución optimizada con Inteligencia Artificial para generar horarios académicos más eficientes. ¡Orgullosos de este reconocimiento!."
                                        : "We represented Scheduler Pro, an optimized solution with Artificial Intelligence to generate more efficient academic schedules. Proud of this recognition!."
                                }
                            />
                            <AwardCard
                                title={language === "ES" ? "2do Lugar en la Cusco Hackathon Innovators" : "2nd Place in the Cusco Hackathon Innovators 2024"}
                                organization="CUSCO INNOVATORS"
                                year="2024"
                                description={
                                    language === "ES"
                                        ? "Premiado a mi y equipo por implementar AutoMenu, una solución innovadora que permite a los clientes generar recetas con una foto de su nevera con inteligencia artificial de Gemini."
                                        : "Awarded to me and team for implementing AutoMenu, an innovative solution that allows customers to generate recipes with a photo of their fridge with Gemini Artificial Intelligence."
                                }
                            />
                            <AwardCard
                              title={language === "ES"
                                ? "Ganadores en Cusco Hackathon e impulsores de innovación regional"
                                : "Winners at Cusco Hackathon and Regional Innovation Drivers"}
                              organization="Creativa Lab & CUSCO INNOVATORS"
                              year="2024"
                              description={
                                  language === "ES"
                                    ? "Ser parte del equipo ganador en la Cusco Hackathon Innovators 2024 con AutoMenu fue increíble. Nuestra solución usó IA de Gemini para generar recetas a partir de una foto de una refrigeradora. Este logro, junto con ser seleccionados por StartUp Perú 11G, valida nuestra visión de transformar realidades desde regiones como Cusco."
                                    : "Being part of the winning team at Cusco Hackathon Innovators 2024 with AutoMenu was an amazing experience. Our solution used Gemini AI to generate recipes from a photo of a fridge. This achievement, along with being selected as a winner of StartUp Perú 11G, validates our vision of transforming realities from regions like Cusco."
                              }
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Contactanos */}
                <div className="mt-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        {language === "ES" ? "Contactame" : "Contact me"}
                    </h2>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            onClick={openGithub}
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 hover:border hover:dark:border-white cursor-pointer hover:border-black">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <GithubIcon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        {language === "ES" ? "Proyectos en GitHub" : "GitHub Projects"}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">177+</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            onClick={openLinkedin}
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 hover:border hover:dark:border-white cursor-pointer hover:border-black">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <LinkedinIcon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                        {language === "ES" ? "Conexiones en LinkedIn" : "LinkedIn Network"}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">1199+</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                className={`flex flex-col overflow-hidden rounded-lg shadow-lg bg-gradient-to-r animate-pulse ${colorClasses[color]}`}
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

interface AwardCardProps {
    title: string
    organization: string
    year: string
    description: string
}

const AwardCard: React.FC<AwardCardProps> = ({ title, organization, year, description }) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
                </div>
                <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        {organization} - {year}
                    </p>
                </div>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMePage

