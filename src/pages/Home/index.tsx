import ContainerHome from "../../components/ContainerHome"
import ContainerSlideFilm from "../../components/ContainerSlideFilm"

type Props = {}

export default function HomePage({ }: Props) {
    return (
        <>
            <ContainerSlideFilm title="Popular Movies" url1="/popular" />
            <ContainerSlideFilm title="Movies and Shows" url1="/upcoming" url2="/now_playing" />
            <ContainerSlideFilm title="Top rated Movies" url1="/top_rated" />
        </>
    )
}