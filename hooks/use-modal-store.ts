import { create } from "zustand"

// Updated interface to match the bilingual structure
interface Project {
    title: {
        ES: string
        EN: string
    }
    image: string
    url: string
    isTop?: boolean
    technologies: string[]
    descriptions: {
        ES: string
        EN: string
    }[]
}

interface ModalState {
    isOpen: boolean
    project: Project | null
    openModal: (project: Project) => void
    onClose: () => void
}

const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    project: null,
    openModal: (project) => set({ isOpen: true, project }),
    onClose: () => set({ isOpen: false, project: null }),
}))

export default useModalStore
