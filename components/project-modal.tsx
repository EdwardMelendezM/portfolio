import Image from "next/image"
import Link from "next/link"
import { EyeIcon, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import useModalStore from "@/hooks/use-modal-store"
import useLanguage from "@/hooks/use-languages"

const ProjectModal: React.FC = () => {
    const { isOpen, project, onClose } = useModalStore();
    const currentLanguage = useLanguage((state) => state.language);

    if (!project) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={onClose}>
                    <DialogContent className="p-0 overflow-hidden max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <DialogHeader className="pt-8 px-6">
                                <DialogTitle className="text-3xl text-center font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                                    {project.title}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="relative w-full h-80 md:h-[50vh]">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3">
                                    <Badge
                                        variant="secondary"
                                        className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                    >
                                        {currentLanguage === "ES" ? "Ver proyecto" : "View project"}
                                        <EyeIcon className="w-4 h-4 ml-2" />
                                    </Badge>
                                </Link>
                            </div>
                            <div className="px-6 pt-4 pb-6">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {project.descriptions.map((description, index) => (
                                        <p key={index} className="text-gray-700 dark:text-gray-300 text-sm">
                                            {description}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex justify-end mt-6">
                                    <Button onClick={onClose} variant="outline" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <X className="w-4 h-4 mr-2" />
                                        {currentLanguage === "ES" ? "Cerrar" : "Close"}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

export default ProjectModal

