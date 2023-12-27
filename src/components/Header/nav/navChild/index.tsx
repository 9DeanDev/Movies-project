import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

type Props = {
    url: string;
    icon: ReactNode;
    title: string;
}

export default function NavChild({ icon, title, url }: Props) {
    return (
        <Link className={styles.navChild} to={url}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </Link>
    )
}