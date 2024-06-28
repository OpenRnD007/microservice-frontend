import { useEffect } from "react"
import { Movies, useMoviestore } from "../store"
//import { data } from "../store/dummy"
import { searchMovies } from "../utils/apicalls";

/**
* Custom hook to manage the movies listing in the store.
* It fetches the movies based on the search term and current page, and updates the store accordingly.
* It also provides a pagination function to navigate through the search results.
*
* @returns An object containing the paginate function to navigate the search results.
*/
const useSetMoviesListing = () => {
    // Access the setMovies action and state variables from the store.
    const setMovies = useMoviestore((state: { setMovies: (movies: Movies[]) => void }) => state.setMovies);
    const page = useMoviestore((state) => state.page)
    const searchTerm = useMoviestore((state) => state.searchTerm)
    const goto = useMoviestore((state: { goto: (page: number) => void }) => state.goto);

    // Effect to populate the store with initial data.
    useEffect(() => {
        // console.log([searchTerm, page])
        // Populate the store with data
        searchMovies(searchTerm, page).then(resp => {
            if (!resp) return
            setMovies(resp.data);
        })
    }, [setMovies]);

    // Function to handle pagination.
    const paginate = async (next: boolean) => {
        const currPage = next ? page + 1 : page - 1
        if (currPage < 0) return
        searchMovies(searchTerm, currPage).then(resp => {
            if (!resp) return
            if (resp.data && resp.data.length) {
                goto(currPage)
            }
            setMovies(resp.data);
        })
    }

    return {
        paginate
    }
}

export default useSetMoviesListing;