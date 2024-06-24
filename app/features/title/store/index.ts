import { create } from 'zustand';
// Define the types for our store's state
export type Title = {
    tconst: string;
    titleType: string;
    primaryTitle: string,
    originalTitle: string;
    isAdult: string;
    startYear: string;
    runtimeMinutes: string;
    genres: string;
    endYear: string;
};

interface TitleState {
    movie: Title,
    setMovie: (data: Title) => void;
};

// Create the store with Zustand
export const useTitlestore = create<TitleState>()((set) => ({
    movie: {} as Title,
    setMovie: (movie: Title) => {
        set({ movie })
    },
}));
