import React from 'react'
import ContainerSlideFilm from '../../components/ContainerSlideFilm'

type Props = {}

export default function Top_Rated({ }: Props) {
    return (
        <ContainerSlideFilm title="Top rated Movies" url1="/top_rated" />
    )
}