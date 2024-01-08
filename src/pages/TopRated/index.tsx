import React from 'react'
import ContainerSlideFilm from '../../components/ContainerSlideFilm'
import ContainerHome from '../../components/BannerHome'

type Props = {}

export default function Top_Rated({ }: Props) {
    return (
        <>
            <ContainerHome />
            <ContainerSlideFilm title="Top rated Movies" url1="/top_rated" />
        </>

    )
}