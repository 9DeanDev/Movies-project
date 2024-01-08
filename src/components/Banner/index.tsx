import styles from './styles.module.scss'
import { MdNotStarted } from "react-icons/md";

type Props = {
    background: string;
    title1: string;
    title2?: string;
    rate?: string;
    release_date?: string;
    action: string;
}

export default function Banner({ background, title1, title2, rate, release_date, action }: Props) {
    return (
        <section className={`${styles.home}`}>
            <img src={background} alt="Home BackGround" className={`${styles.bg}`} />
            <div className={`${styles.hometext} px-5`}>
                <h1>
                    {title1}
                    <br />
                    {title2}
                </h1>
                <p>
                    Release Date: {release_date}
                </p>
                <p>
                    {rate}
                </p>
                <a href="">
                    <MdNotStarted size='50px' />
                    <span>
                        {action}
                    </span>
                </a>
            </div>
        </section>
    )
}