import { useDeferredValue, useEffect, useState } from "react"
import { Movies, useMoviestore } from "./store";
import { searchMovies } from "./utils/apicalls";

/**
* The Header component contains a search input field and handles the search functionality.
* It uses a deferred value to delay the search operation until typing has stopped.
*
* @returns {JSX.Element} A div element containing the search input field.
*/
const Header = (): JSX.Element => {
    // State for the search text input.
    const [text, setText] = useState('')

    // Deferred value for the search text to reduce the frequency of search operations.
    const deferredText = useDeferredValue(text)

    // Function from the store to update the search results.
    const searchTitles = useMoviestore((state: { searchTitles: (term: string, data: Movies[]) => void }) => state.searchTitles);

    // Effect to perform the search operation whenever the deferredText changes.
    useEffect(() => {
        searchMovies(deferredText, 0).then(resp => {
            if (!resp) return
            // Update the search results in the store with the response data.
            searchTitles(deferredText, resp.data)
        })
    }, [deferredText])

    return (
        <div className="sticky top-0 z-[100] relative mt-6 max-w-lg mx-auto ">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-yellow-600 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search" />
        </div>
    )
}

export default Header