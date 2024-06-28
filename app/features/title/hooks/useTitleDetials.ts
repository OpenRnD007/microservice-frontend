import { useEffect } from "react"
import { useTitlestore } from "../store"
import { getTitleApi } from "../utils/apicalls"

/**
* Custom hook to set the movie title in the store.
* It fetches the movie details using the getTitleApi function and populates the store on component mount.
*
* @param {string} title - The title of the movie to fetch details for.
*/
const useTitleDetials = (title: string): void => {
    const setTitle = useTitlestore((state) => state.setMovie)

    useEffect(() => {
        // Fetch and set movie details if the title is provided.
        if (title) {
            getTitleApi(title)
                .then(currentMovie => {
                    if (!currentMovie) return
                    // Update the store with the fetched movie details.
                    setTitle(currentMovie.data)
                })
        }
    }, [title])
}

export default useTitleDetials;