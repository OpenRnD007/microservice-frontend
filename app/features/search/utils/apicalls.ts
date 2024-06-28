import axios from "axios"

/**
* Asynchronously performs a search query to the specified search API.
* 
* @param {string} searchterm - The term to search for.
* @param {number} page - The page number for pagination purposes.
* @returns {Promise<any>} - A promise that resolves to the search results.
*/
export const searchMovies = async (searchterm: string = "", page: number = 0): Promise<any> => {
    if (!process.env.NEXT_PUBLIC_SEARCH_API) {
        console.error("Please add ENV variable")
        return
    }
    return await axios.post(
        process.env.NEXT_PUBLIC_SEARCH_API,
        {
            searchterm,
            page
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}