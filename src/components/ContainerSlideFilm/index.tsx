import styles from "./styles.module.scss"
import HeadingBar from "../../components/HeadingBar"
import SlideFilm from "../../components/SlideFilm"

type Props = {
    title: string;
    url1: string;
    url2?: string;
}

export default function ContainerSlideFilm({ title, url1, url2 }: Props) {
    return (
        <div className={styles.container} id={url1}>
            <HeadingBar title={title} />
            <SlideFilm url={url1} />
            {url2 && <SlideFilm url={url2} />}
        </div>
    )
}