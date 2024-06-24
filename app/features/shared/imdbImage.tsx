import axios from "axios"
import { useEffect, useState } from "react"

const ImdbImage = ({ tconst }: { tconst: string }) => {
    const [imgpath, setImgpath] = useState<string>("https://placehold.co/800x600?text=Loading....")

    useEffect(() => {
        let abortController = new AbortController()
        let abortControllerOmd = new AbortController()
        if (tconst) {
            let currUrl = window.localStorage.getItem(tconst)
            if (currUrl) {
                setImgpath(currUrl)
            } else {
                (async () => {
                    try {
                        const resp = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?idIMDB=${tconst}&token=05e5daaf-0257-4cbd-8f31-7e3e69e48f2c&format=json`, { signal: abortController.signal })
                        if (resp && resp.data && resp.data.data && resp.data.data.movies && resp.data.data.movies.length && resp.data.data.movies[0].urlPoster) {
                            setImgpath(resp.data.data.movies[0].urlPoster)
                            window.localStorage.setItem(tconst, resp.data.data.movies[0].urlPoster)
                        }
                    } catch {
                        try {
                            await axios.get(`https://img.omdbapi.com/?i=${tconst}&apikey=c00911b5`, { signal: abortControllerOmd.signal })
                            setImgpath(`https://img.omdbapi.com/?i=${tconst}&apikey=c00911b5`)
                            window.localStorage.setItem(tconst, `https://img.omdbapi.com/?i=${tconst}&apikey=c00911b5`)
                        } catch (err) {
                            console.log(err)
                        }
                    }
                })()
            }
        }
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