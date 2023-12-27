import styles from './styles.module.scss'
import { Input, Space, Divider, Form } from 'antd'
import user from '../../assets/user.png'
import Nav from './nav';

const { Search } = Input;
type Props = {}

export default function Header({ }: Props) {
    return (
        <header>
            <div className={`${styles.container} d-flex align-items-center justify-content-between py-4 gap-3`}>
                <a className={styles.logo} href='https://github.com/9DeanDev' target='_blank'>
                    <span className={styles.name}>
                        DEAN
                    </span>
                    <span className={styles.position}>
                        DEV
                    </span>
                </a>
                <Search placeholder='Search Movie' style={{ width: '200px', borderRadius: '0px', background: '#1e1e2a', color: 'red' }} />
                <a href=''>
                    <img src={user} className={styles.user} />
                </a>
                <Nav />
            </div>
        </header>
    )
}