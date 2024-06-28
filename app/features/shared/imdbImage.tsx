import axios from "axios"
import { useEffect, useState } from "react"

/**
* The ImdbImage component fetches and displays an image from IMDb for a given title.
*
* @param {{ tconst: string }} { tconst } - The props object containing the IMDb title ID (tconst).
* @returns {JSX.Element} An image element displaying the movie poster.
*/
const ImdbImage = ({ tconst }: { tconst: string }): JSX.Element => {
    // State to hold the image path, initialized with a placeholder image.
    const [imgpath, setImgpath] = useState<string>("https://placehold.co/800x600?text=Loading....")

    useEffect(() => {
        // Controllers to abort the HTTP requests if the component unmounts.
        let abortController = new AbortController()
        let abortControllerOmd = new AbortController()
        if (tconst) {
            // Check if the image URL is already stored in localStorage.
            let currUrl = window.localStorage.getItem(tconst)
            if (currUrl) {
                setImgpath(currUrl)
            } else {
                // Fetch the image URL from the API.
                (async () => {
                    try {
                        const resp = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${tconst}&token=${process.env.NEXT_PUBLIC_MYAPIFILMS}&format=json`, { signal: abortController.signal })
                        if (resp && resp.data && resp.data.data && resp.data.data.movies && resp.data.data.movies.length && resp.data.data.movies[0].urlPoster) {
                            setImgpath(resp.data.data.movies[0].urlPoster)
                            window.localStorage.setItem(tconst, resp.data.data.movies[0].urlPoster)
                        }
                    } catch {
                        try {
                            await axios.get(`https://img.omdbapi.com/?i=${tconst}&apikey=${process.env.NEXT_PUBLIC_OMDBAPI}`, { signal: abortControllerOmd.signal })
                            setImgpath(`https://img.omdbapi.com/?i=${tconst}&apikey=${process.env.NEXT_PUBLIC_OMDBAPI}`)
                            window.localStorage.setItem(tconst, `https://img.omdbapi.com/?i=${tconst}&apikey=${process.env.NEXT_PUBLIC_OMDBAPI}`)
                        } catch (err) {
                            console.log(err)
                        }
                    }
                })()
            }
        }
        // Cleanup function to abort any ongoing requests when the component unmounts.
        return () => {
            abortController.abort()
            abortControllerOmd.abort()
        }
    }, [tconst])
    return (
        <img className="max-w-xs md:max-w-sm m-auto" src={imgpath} style={{ width: "100%", height: "500px" }} />
    )
}

export default ImdbImage