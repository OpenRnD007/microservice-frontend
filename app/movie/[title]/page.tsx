"use client"
import { Movie } from '@/app/features'
/**
* The Page component is responsible for rendering the Movie component.
* It receives a 'title' as a prop through its 'params' object and passes it to the Movie component.
*
* @param {{ params: { title: string } }} { params } - The props object containing 'params', which includes the 'title'.
* @returns {JSX.Element} The Movie component with the title passed as a prop.
*/
export default function Page({ params }: { params: { title: string } }): JSX.Element {
    return (
        <Movie title={params.title}/>
    )
}