import { create } from 'zustand'

interface LanguageState {
  language: "EN" | "ES";
  setLanguage: (language: "ES" | "EN") => void;
}

const useLanguage = create<LanguageState>((set) => ({
  language: "EN",
  setLanguage: (language: "ES" | "EN") => set({ language })
}));

export default useLanguage;
