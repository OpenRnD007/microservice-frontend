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

/**
* Creates a Zustand store to manage the state of the movie title.
* The store contains the movie title details and a setter function to update it.
*
* @returns A Zustand hook that provides access to the movie title state and actions to interact with it.
*/
export const useTitlestore = create<TitleState>()((set) => ({
    movie: {} as Title,
    setMovie: (movie: Title) => {
        set({ movie })
    },
}));
