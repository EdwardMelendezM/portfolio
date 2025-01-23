'use client'

import Image from "next/image";

import useModalStore from "@/hooks/use-modal-store";
import { projects } from "@/projects";
import { Separator } from "@/components/ui/separator";

export interface Project {
    title: string;
    image: string;
    url: string;
    technologies: string[];
    descriptions: string[];

}

const Projects: React.FC = () => {
    const openModal = useModalStore((state) => state.openModal);

    return (
        <div className="w-full flex flex-col items-center justify-start py-10">
            <h1 className="text-4xl font-bold text-orange-400 dark:text-orange-400 mb-10">
                Proyectos
            </h1>
            <Separator className="mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-6xl">
                {projects.map((project, index) => (
                    <div key={index} className="group relative">
                        <div
                            onClick={() => openModal(project)}
                            className="cursor-pointer relative w-full h-72 md:h-72 bg-gray-200 dark:bg-gray-800
                                rounded-lg overflow-hidden shadow-lg border-2 border-blue-400 ">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform transform group-hover:scale-105 blur-none group-hover:filter group-hover:blur-sm"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300
                                    opacity-0 group-hover:opacity-100"/>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0
                                group-hover:opacity-100 transition-opacity duration-300 text-gray-300 font-bold">
                                Ver más
                            </div>
                        </div>
                        <p className="text-center text-md font-semibold text-blue-700  dark:text-blue-400  mt-4">
                            {project.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
