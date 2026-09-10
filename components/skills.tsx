"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import useLanguage from "@/hooks/use-languages"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Code, Database, Cloud, Zap, Globe } from "lucide-react"
import { useState } from "react"

const skillCategories = {
  frontend: {
    icon: Globe,
    title: { ES: "Frontend", EN: "Frontend" },
    color: "from-blue-500 to-cyan-500",
    skills: [
      {
        name: "React",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
        level: 90,
        years: 4,
      },
      {
        name: "Next.js",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
        level: 85,
        years: 3,
      },
      {
        name: "TypeScript",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
        level: 88,
        years: 3,
      },
      {
        name: "JavaScript",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
        level: 92,
        years: 4,
      },
      {
        name: "Tailwind CSS",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png",
        level: 85,
        years: 2,
      },
      {
        name: "Angular",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png",
        level: 75,
        years: 2,
      },
    ],
  },
  backend: {
    icon: Code,
    title: { ES: "Backend", EN: "Backend" },
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Node.js",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
        level: 88,
        years: 4,
      },
      {
        name: "Python",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
        level: 85,
        years: 3,
      },
      {
        name: "Go",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/go/go.png",
        level: 70,
        years: 1,
      },
      {
        name: "PHP",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png",
        level: 75,
        years: 2,
      },
      {
        name: "Express.js",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/express/express.png",
        level: 85,
        years: 3,
      },
      {
        name: "FastAPI",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/fastapi/fastapi.png",
        level: 80,
        years: 2,
      },
    ],
  },
  database: {
    icon: Database,
    title: { ES: "Bases de Datos", EN: "Databases" },
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "PostgreSQL",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png",
        level: 85,
        years: 3,
      },
      {
        name: "MongoDB",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png",
        level: 80,
        years: 3,
      },
      {
        name: "MySQL",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png",
        level: 82,
        years: 4,
      },
      {
        name: "Redis",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/redis/redis.png",
        level: 75,
        years: 2,
      },
      { name: "Supabase", url: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", level: 78, years: 1 },
    ],
  },
  devops: {
    icon: Cloud,
    title: { ES: "DevOps & Cloud", EN: "DevOps & Cloud" },
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "Docker",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
        level: 80,
        years: 2,
      },
      {
        name: "AWS",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png",
        level: 75,
        years: 2,
      },
      {
        name: "Kubernetes",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/kubernetes/kubernetes.png",
        level: 65,
        years: 1,
      },
      {
        name: "GitHub Actions",
        url: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
        level: 82,
        years: 2,
      },
      {
        name: "Vercel",
        url: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
        level: 85,
        years: 2,
      },
    ],
  },
  tools: {
    icon: Zap,
    title: { ES: "Herramientas & Testing", EN: "Tools & Testing" },
    color: "from-teal-500 to-blue-500",
    skills: [
      {
        name: "Git",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/git/git.png",
        level: 90,
        years: 4,
      },
      { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: 85, years: 3 },
      {
        name: "VS Code",
        url: "https://raw.githubusercontent.com/github/explore/main/topics/visual-studio-code/visual-studio-code.png",
        level: 95,
        years: 4,
      },
    ],
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const EnhancedSkills: React.FC = () => {
  const router = useRouter()
  const currentLanguage = useLanguage((state) => state.language)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  
  const getExperienceText = (years: number) => {
    if (currentLanguage === "ES") {
      return years === 1 ? "1 año" : `${years} años`
    }
    return years === 1 ? "1 year" : `${years} years`
  }
  
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
            {currentLanguage === "ES" ? "Mis Habilidades" : "My Skills"}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {currentLanguage === "ES"
            ? "4 años de experiencia como Full Stack Developer"
            : "4 years of experience as Full Stack Developer"}
        </p>
        <Separator className="mt-6 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full" />
      </motion.div>
      
      {/* Back Button */}
      <motion.div
        className="mb-12 flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
        onClick={() => router.back()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
        <p className="group-hover:text-blue-500 text-gray-500 dark:text-gray-400 font-medium transition-colors">
          {currentLanguage === "ES" ? "Regresar" : "Back"}
        </p>
      </motion.div>
      
      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-[95%] max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(skillCategories).map(([categoryKey, category]) => {
          const IconComponent = category.icon
          return (
            <motion.div key={categoryKey} variants={itemVariants}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-slate-800/90">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.title[currentLanguage as keyof typeof category.title]}
                    </h2>
                  </div>
                  
                  {/* Skills List */}
                  <motion.div className="space-y-4" variants={containerVariants}>
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="group/skill"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="relative">
                            <Image
                              src={skill.url || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              width={32}
                              height={32}
                              className="rounded-lg shadow-sm group-hover/skill:scale-110 transition-transform duration-300"
                            />
                            {hoveredSkill === skill.name && (
                              <motion.div
                                className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                              <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700">
                                {getExperienceText(skill.years)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Progress value={skill.level} className="flex-1 h-2" />
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 min-w-[3rem]">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
      
      {/* Stats Footer */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {[
          { number: "4+", label: currentLanguage === "ES" ? "Años de Experiencia" : "Years Experience" },
          { number: "25+", label: currentLanguage === "ES" ? "Tecnologías" : "Technologies" },
          { number: "50+", label: currentLanguage === "ES" ? "Proyectos" : "Projects" },
          { number: "100%", label: currentLanguage === "ES" ? "Dedicación" : "Dedication" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default EnhancedSkills
