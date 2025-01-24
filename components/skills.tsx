"use client"

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import useLanguage from "@/hooks/use-languages";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { Separator } from "@radix-ui/react-separator";
import { ArrowLeft } from "lucide-react";

const skills = {
    frontend: [
        { name: "Typescript", url: "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png", color: "from-blue-400 to-blue-600" },
        { name: "Angular", url: "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png", color: "from-red-500 to-red-700" },
        { name: "Next.js", url: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png", color: "from-gray-800 to-gray-900" },
        { name: "Tailwind", url: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png", color: "from-teal-400 to-teal-600" },
    ],
    backend: [
        { name: "Python", url: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png", color: "from-green-500 to-green-700" },
        { name: "Go", url: "https://raw.githubusercontent.com/github/explore/main/topics/go/go.png", color: "from-gray-500 to-gray-700" },
        { name: "PHP", url: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png", color: "from-indigo-500 to-indigo-700" },
        { name: "Bun", url: "https://raw.githubusercontent.com/github/explore/main/topics/bun/bun.png", color: "from-gray-500 to-gray-700" },
    ],
    devops: [
        { name: "AWS", url: "https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png", color: "from-yellow-500 to-yellow-700" },
        { name: "Kubernetes", url: "https://raw.githubusercontent.com/github/explore/main/topics/kubernetes/kubernetes.png", color: "from-blue-500 to-blue-700" },
        { name: "GitLab", url: "https://raw.githubusercontent.com/github/explore/main/topics/gitlab/gitlab.png", color: "from-orange-500 to-orange-700" },
        { name: "GitActions", url: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4", color: "from-gray-500 to-gray-700" },
    ],

};

const Skills: React.FC = () => {
    const router = useRouter()
    const currentLanguage = useLanguage((state) => state.language);

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <motion.h1
                className="text-4xl font-extrabold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
                    {currentLanguage === "ES" ? "Mis habilidades" : "My Skills"}
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
            <div className="grid grid-cols-1 gap-10 w-[90%] max-w-6xl">
                {Object.entries(skills).map(([category, skillList], index) => (

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} key={index}>
                        <div
                            className="flex flex-col items-center p-8 rounded-lg shadow-xl dark:bg-gradient-to-tl dark:from-gray-800 dark:to-gray-900 transform hover:scale-105 transition-transform duration-300"
                        >
                            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6 capitalize">
                                {category}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {(skillList as typeof skills.backend).map((skill, idx) => (
                                    <Badge
                                        key={idx}
                                        variant="outline"
                                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg border border-transparent bg-gradient-to-r ${skill.color} shadow-md`}
                                    >
                                        <Image
                                            src={skill.url}
                                            alt={`${skill.name} logo`}
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />
                                        <span>{skill.name}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
