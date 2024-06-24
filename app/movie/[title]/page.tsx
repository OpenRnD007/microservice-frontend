"use client"
import { Movie } from '@/app/features'
export default function Page({ params }: { params: { title: string } }) {
    return (
        <Movie title={params.title}/>
    )
}