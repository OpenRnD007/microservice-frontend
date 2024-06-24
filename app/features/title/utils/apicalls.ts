import axios from "axios"

export const getTitleApi = async (title: string) => {
    if (!process.env.NEXT_PUBLIC_PRODUCT_API) {
        console.error("Please add ENV variable")
        return
    }
    const titleInfo = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_API}/${title}/`)
    return titleInfo
}