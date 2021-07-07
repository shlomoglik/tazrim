import styles from "./button.module.css"

export default function Button(props) {
    const { text = "+הוסף" } = props
    const onClick = e => {
        e.preventDefault();
        props.onClick()
    }
    return <button className={styles.button} onClick={onClick}>{text}</button>
}