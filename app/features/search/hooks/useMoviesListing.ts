import { useEffect } from "react"
import { Movies, useMoviestore } from "../store"
//import { data } from "../store/dummy"
import { searchMovies } from "../utils/apicalls";
/**
* Custom hook to set the movies listing in the store.
* It fetches the Movies and populates the store on component mount.
*/
const useSetMoviesListing = () => {
    const setMovies = useMoviestore((state: { setMovies: (movies: Movies[]) => void }) => state.setMovies);
    const page = useMoviestore((state) => state.page)
    const searchTerm = useMoviestore((state) => state.searchTerm)
    const goto = useMoviestore((state: { goto: (page: number) => void }) => state.goto);


    useEffect(() => {
        // Populate the store with data
        console.log([searchTerm, page])
        searchMovies(searchTerm, page).then(resp => {
            if (!resp) return
            setMovies(resp.data);
        })
    }, [setMovies]);

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