import styles from './styles.module.scss'

type Props = {
    title: String
}

export default function HeadingBar({ title }: Props) {
    return (
        <div className={`${styles.heading}`}>
            <h2>
                {title}
            </h2>
        </div>
    )
}