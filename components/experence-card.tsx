import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

export interface ExperienceCardProps {
    title: {
        ES: string
        EN: string
    }
    company: {
        ES: string
        EN: string
    }
    duration: {
        ES: string
        EN: string
    }
    description: {
        ES: string
        EN: string
    }
    badges: string[]
    language: "ES" | "EN"
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description, badges, language }) => {
    const newTitle = language === "ES" ? title.ES : title.EN
    const newCompany = language === "ES" ? company.ES : company.EN
    const newDuration = language === "ES" ? duration.ES : duration.EN
    const newDescription = language === "ES" ? description.ES : description.EN
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6">
                    <CardTitle className="text-2xl font-bold">{newTitle}</CardTitle>
                    <CardDescription className="text-gray-100 text-lg">{newCompany}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{newDuration}</p>
                    <div className="flex flex-wrap items-center justify-between">
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{newDescription}</p>
                        {badges && badges.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {badges.map((badge, index) => (
                                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ExperienceCard
