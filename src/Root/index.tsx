import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import Header from '../components/Header'
import ContainerHome from '../components/ContainerHome'
import Footer from '../components/Footer'


type Props = {}

export default function Root({ }: Props) {
    return (
        <div className={styles.root}>
            <Header />
            <ContainerHome />
            <Outlet />
            <Footer />
        </div>
    )
}