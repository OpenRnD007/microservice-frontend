import { useEffect } from "react"
import { useTitlestore } from "../store"
import { getTitleApi } from "../utils/apicalls"
/**
* Custom hook to set the movie title in the store.
* It fetches the Movies and populates the store on component mount.
*/
const useTitleDetials = (title: string): void => {
    const setTitle = useTitlestore((state) => state.setMovie)

    useEffect(() => {
        if (title) {
            getTitleApi(title)
                .then(currentMovie => {
                    if (!currentMovie) return
                    setTitle(currentMovie.data)
                })
        }
    }, [title])
}

export default useTitleDetials;