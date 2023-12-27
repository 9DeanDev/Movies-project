import React from 'react'
import ContainerSlideFilm from '../../components/ContainerSlideFilm'

type Props = {}

export default function ExplorePage({ }: Props) {
    return (
        <ContainerSlideFilm title="Movies and Shows" url1="/upcoming" url2="/now_playing" />
    )
}