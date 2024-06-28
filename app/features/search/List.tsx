import Card from "./Card"
import useSetMoviesListing from "./hooks/useMoviesListing";
import { Movies, useMoviestore } from "./store";
import { useShallow } from 'zustand/react/shallow'
/**
* The List component renders a paginated list of movies title.
* It provides buttons to navigate between pages and displays movie cards.
*
* @returns {JSX.Element} A main element containing the paginated list of movies titles.
*/
const List = (): JSX.Element => {
    // Retrieves the list of movies from the store.
    const movies: Movies[] = useMoviestore(useShallow((state) => state.movies));

    // Retrieves the pagination function from the store.
    const { paginate } = useSetMoviesListing()

    return (
        <main className="my-8">
            <div className="container mx-auto px-6">
                <div className="flex justify-center">
                    <div className="flex rounded-md">
                        <button onClick={(e) => {
                            e.preventDefault()
                            paginate(false)
                        }} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white">
                            <span>Previous</span>
                        </button>
                        <button onClick={(e) => {
                            e.preventDefault()
                            paginate(true)
                        }} className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white">
                            <span>Next</span>
                        </button>
                    </div>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                    {movies.map(m => <Card key={m.tconst} data={m} />)}
                </div>

            </div>
        </main>
    )
}

export default List