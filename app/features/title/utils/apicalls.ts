import axios from "axios"
/**
* Asynchronously retrieves title information from a specified API.
* 
* @param {string} title - The title for which information is being requested.
* @returns {Promise<any>} - A promise that resolves to the title information.
*/
export const getTitleApi = async (title: string): Promise<any> => {
    // Checks for the presence of the required environment variable.
    if (!process.env.NEXT_PUBLIC_PRODUCT_API) {
        console.error("Please add ENV variable")
        return
    }

    // Constructs the API endpoint using the environment variable and the provided title.
    const titleInfo = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_API}/${title}/`)

    // Returns the response containing the title information.
    return titleInfo
}