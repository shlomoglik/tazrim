import styles from "./card.module.css"

export default function Card(props) {
    const { title, id, description } = props
    return <a href={id} key={id} className={styles.card}>
        <h2>{title}</h2>
        <p>{description || ""}</p>
    </a>
}