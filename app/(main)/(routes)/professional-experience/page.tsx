"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { experiences } from "@/projects"
import { motion } from "framer-motion"
import useLanguage from "@/hooks/use-languages"
import { ArrowLeft, Building2, Calendar, TrendingUp, Award, Users, Code } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

const timelineVariants = {
    hidden: { height: 0 },
    visible: {
        height: "100%",
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
}

interface EnhancedExperienceCardProps {
    title: { ES: string; EN: string }
    company: { ES: string; EN: string }
    duration: { ES: string; EN: string }
    description: { ES: string; EN: string }
    badges: string[]
    language: string
    index: number
    isLast: boolean
}

const EnhancedExperienceCard: React.FC<EnhancedExperienceCardProps> = ({
                                                                           title,
                                                                           company,
                                                                           duration,
                                                                           description,
                                                                           badges,
                                                                           language,
                                                                           index,
                                                                           isLast,
                                                                       }) => {
    const [isHovered, setIsHovered] = useState(false)
    
    const getText = (text: { ES: string; EN: string }) => {
        return text[language as keyof typeof text] || text.EN
    }
    
    const getCompanyIcon = (companyObj: { ES: string; EN: string }) => {
        const companyName = getText(companyObj).toLowerCase()
        
        if (companyName.includes("sin codigo") || companyName.includes("creativa")) {
            return Code
        }
        if (companyName.includes("smart city")) {
            return Building2
        }
        if (companyName.includes("infocode") || companyName.includes("asdu")) {
            return Users
        }
        return Building2
    }
    
    const CompanyIcon = getCompanyIcon(company)
    
    return (
      <motion.div
        className="relative flex items-start group"
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Timeline Line */}
          <div className="flex flex-col items-center mr-8">
              <motion.div
                className={`w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                  isHovered
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : "bg-gradient-to-r from-gray-400 to-gray-500"
                } transition-all duration-300`}
              />
              {!isLast && (
                <motion.div
                  className="w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 mt-2"
                  variants={timelineVariants}
                  style={{ height: "calc(100% + 3rem)" }}
                />
              )}
          </div>
          
          {/* Experience Card */}
          <motion.div className="flex-1 mb-12" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="group-hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white/95 dark:hover:bg-slate-800/95 overflow-hidden">
                  <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                              <motion.div
                                className={`p-3 rounded-xl bg-gradient-to-r ${
                                  index % 3 === 0
                                    ? "from-blue-500 to-cyan-500"
                                    : index % 3 === 1
                                      ? "from-purple-500 to-pink-500"
                                      : "from-green-500 to-emerald-500"
                                } shadow-lg`}
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                  <CompanyIcon className="w-6 h-6 text-white" />
                              </motion.div>
                              <div>
                                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{getText(title)}</h3>
                                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                      <Building2 className="w-4 h-4" />
                                      <span className="font-semibold">{getText(company)}</span>
                                  </div>
                              </div>
                          </div>
                          
                          <motion.div className="text-right" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }}>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{getText(duration)}</span>
                              </div>
                              <Badge
                                variant="secondary"
                                className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 border-0"
                              >
                                  {language === "ES" ? "Experiencia" : "Experience"}
                              </Badge>
                          </motion.div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{getText(description)}</p>
                      </div>
                      
                      {/* Technologies/Skills */}
                      <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                              {language === "ES" ? "Tecnologías Utilizadas" : "Technologies Used"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                              {badges.map((badge, badgeIndex) => (
                                <motion.div
                                  key={badgeIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: badgeIndex * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                    <Badge
                                      variant="outline"
                                      className={`px-3 py-1 text-sm font-medium border-2 transition-all duration-300 ${
                                        badgeIndex % 4 === 0
                                          ? "border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
                                          : badgeIndex % 4 === 1
                                            ? "border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20"
                                            : badgeIndex % 4 === 2
                                              ? "border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/20"
                                              : "border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/20"
                                      }`}
                                    >
                                        {badge}
                                    </Badge>
                                </motion.div>
                              ))}
                          </div>
                      </div>
                      
                      {/* Achievement Indicators */}
                      <motion.div
                        className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                          <div className="text-center">
                              <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 mb-1">
                                  <TrendingUp className="w-4 h-4" />
                                  <span className="text-sm font-semibold">{language === "ES" ? "Crecimiento" : "Growth"}</span>
                              </div>
                          </div>
                          <div className="text-center">
                              <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 mb-1">
                                  <Users className="w-4 h-4" />
                                  <span className="text-sm font-semibold">{language === "ES" ? "Colaboración" : "Teamwork"}</span>
                              </div>
                          </div>
                          <div className="text-center">
                              <div className="flex items-center justify-center gap-1 text-purple-600 dark:text-purple-400 mb-1">
                                  <Award className="w-4 h-4" />
                                  <span className="text-sm font-semibold">{language === "ES" ? "Logros" : "Achievements"}</span>
                              </div>
                          </div>
                      </motion.div>
                  </CardContent>
              </Card>
          </motion.div>
      </motion.div>
    )
}

const EnhancedProfessionalExperience: React.FC = () => {
    const router = useRouter()
    const currentLanguage = useLanguage((state) => state.language)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
              {/* Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text">
              {currentLanguage === "ES" ? "Experiencia Profesional" : "Professional Experience"}
            </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      {currentLanguage === "ES"
                        ? "Mi trayectoria profesional como desarrollador Full Stack"
                        : "My professional journey as a Full Stack Developer"}
                  </p>
                  <Separator className="mt-6 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full" />
              </motion.div>
              
              {/* Back Button */}
              <motion.div
                className="mb-12 flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
                onClick={() => router.back()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                  <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-purple-500 transition-colors" />
                  <p className="group-hover:text-purple-500 text-gray-500 dark:text-gray-400 font-medium transition-colors">
                      {currentLanguage === "ES" ? "Regresar" : "Back"}
                  </p>
              </motion.div>
              
              {/* Experience Timeline */}
              <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible">
                  {/* Timeline Background */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600 opacity-30" />
                  
                  {experiences.map((experience, index) => (
                    <EnhancedExperienceCard
                      key={index}
                      title={experience.title}
                      company={experience.company}
                      duration={experience.duration}
                      description={experience.description}
                      badges={experience.badges}
                      language={currentLanguage}
                      index={index}
                      isLast={index === experiences.length - 1}
                    />
                  ))}
              </motion.div>
              
              {/* Summary Stats */}
              <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                          {experiences.length}+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Posiciones" : "Positions"}
                      </div>
                  </Card>
                  
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text mb-2">
                          4+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Años de Experiencia" : "Years Experience"}
                      </div>
                  </Card>
                  
                  <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
                          15+
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">
                          {currentLanguage === "ES" ? "Tecnologías" : "Technologies"}
                      </div>
                  </Card>
              </motion.div>
          </div>
      </div>
    )
}

export default EnhancedProfessionalExperience
