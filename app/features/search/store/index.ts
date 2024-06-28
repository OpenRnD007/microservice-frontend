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

/**
* Creates a Zustand store to manage the state of movies.
* The store contains an array of movies, the current page, and the search term.
* It provides actions to set movies, navigate pages, and search titles.
*
* @returns A Zustand hook that provides access to the movies state and actions to interact with it.
*/
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
    "name": "movies-storage" // Name of the storage key for persisting the store's state.
}));