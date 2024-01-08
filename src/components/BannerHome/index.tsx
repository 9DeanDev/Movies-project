import styles from './styles.module.scss'
import HomeBG from '../../assets/home-background.png';
import Banner from '../Banner';

type Props = {}

export default function BannerHome({ }: Props) {
    return (
        <Banner background={HomeBG} title1="Hitman's Wife's" title2='Bodyguard'
            release_date='Releasing 23 July' action='Watch the trailer' />
    )
}