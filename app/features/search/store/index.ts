import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the types for our store's state
export type Movies = {
    tconst: string;
    originalTitle: string;
    startYear: string;
    genres: string;
};

interface MoviesState {
    movies: Movies[];
    setMovies: (data: Movies[]) => void;
    page: number;
    searchTerm: string;
    goto: (page: number) => void;
    searchTitles: (term: string, data: Movies[]) => void;
};

// Create the store with Zustand
export const useMoviestore = create<MoviesState>()(persist((set) => ({
    movies: [],
    searchTerm: "",
    page: 0,
    setMovies: (data: Movies[]) => {
        set({ movies: data })
    },
    goto: (pg: number) => {
        set({ page: pg })
    },
    searchTitles: (term: string, data: Movies[]) => {
        set({ searchTerm: term, movies: data, page: 0 })
    },
}), {
    "name": "movies-storage"
}));