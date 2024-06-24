import axios from "axios"

export const searchMovies = async (searchterm: string = "", page = 0) => {
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