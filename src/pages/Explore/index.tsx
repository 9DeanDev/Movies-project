import React from 'react'
import ContainerSlideFilm from '../../components/ContainerSlideFilm'
import ContainerHome from '../../components/BannerHome'

type Props = {}

export default function ExplorePage({ }: Props) {
    return (
        <>
            <ContainerHome />
            <ContainerSlideFilm title="Movies and Shows" url1="/upcoming" url2="/now_playing" />
        </>

    )
}