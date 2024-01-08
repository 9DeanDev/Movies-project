import ContainerHome from '../../components/BannerHome'
import ContainerSlideFilm from '../../components/ContainerSlideFilm'

type Props = {}

export default function PopularPage({ }: Props) {

    return (
        <>
            <ContainerHome />
            <ContainerSlideFilm title="Popular Movies" url1="/popular" />
        </>

    )
}