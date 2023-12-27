import styles from './styles.module.scss'
import HomeBG from '../../assets/home-background.png'
import { MdNotStarted } from "react-icons/md";

type Props = {}

export default function ContainerHome({ }: Props) {
    return (
        <section className={`${styles.home}`}>
            <img src={HomeBG} alt="Home BackGround" className={`${styles.bg}`} />
            <div className={`${styles.hometext} px-5`}>
                <h1>
                    Hitman's Wife's
                    <br />
                    Bodyguard
                </h1>
                <p>
                    Releasing 23 July
                </p>
                <a href="">
                    <MdNotStarted size='50px' />Watch the trailer
                </a>
            </div>
        </section>
    )
}