import styles from "../../styles/base.module.css"
import Card from "../Card/card"

export default function Splash(props) {
    const { splashData } = props
    return (
        <div className={styles.grid}>
            {splashData.map(item => {
                return <Card key={item.id} {...item} />
            })}
        </div>
    )
}