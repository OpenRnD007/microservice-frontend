import { useTitlestore } from "./store";
import { useRouter } from "next/navigation";
import useTitleDetials from "./hooks/useTitleDetials";
import { ImdbImage } from "../shared";

/**
* The MovieTitle component displays detailed information about a movie.
* It uses a custom hook to fetch movie details and renders them within a styled layout.
*
* @param {{ title: string }} { title } - The props object containing the movie title.
* @returns {JSX.Element} A JSX element representing the movie details layout.
*/
const MovieTitle = ({ title }: { title: string }): JSX.Element => {
    const router = useRouter()
    useTitleDetials(title)

    const movieTitle = useTitlestore((state) => state.movie)

    return (
        <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="break-all font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        {movieTitle.originalTitle}
                    </h1>
                    <hr />
                    <div className="mt-8 text-sm sm:text-base text-gray-700 dark:text-white">
                        <ul>
                            <li>Genre: {movieTitle.genres}</li>
                            {movieTitle.runtimeMinutes !== "\N" &&
                                <li>Runtime: {movieTitle.runtimeMinutes} Mins</li>
                            }
                            <li>Released: {movieTitle.startYear}</li>
                            {movieTitle.isAdult !== "0" &&
                                <li>Adult: 18+</li>
                            }
                        </ul>
                    </div>
                    <div className="flex mt-8">
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Buy Movie
                        </a>
                        <a onClick={(e) => {
                            e.preventDefault()
                            router.back()
                        }} className="cursor-pointer uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                            Go Back
                        </a>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <ImdbImage tconst={movieTitle.tconst} />
                </div>
            </div>
        </div>
    )
}

export default MovieTitle