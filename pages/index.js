import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/layout.js'
import Splash from '../components/Splash/splash'

const splashData = [
  {
    id: "companies",
    title: "חברות",
    description: "כניסה למסך חברות"
  },
  {
    id: "users",
    title: "משתמשים",
    description: "ניהול משתמשים במערכת"
  },
  {
    id: "settings",
    title: "הגדרות",
    description: "הגדרות כלליות של המערכת"
  },
]
// function Card(props) {
//   const { title, ref, description } = props
//   return <a href={ref} className={styles.card}>
//     <h2>{title}</h2>
//     <p>{description || ""}</p>
//   </a>
// }

// function Splash(props) {
//   const { splashData } = props
//   return (
//     <div className={styles.grid}>
//       {splashData.map(item => {
//         return <Card key={item.ref} {...item} />
//       })}
//     </div>
//   )
// }

export default function Home() {
  // console.log(Layout)
  return (
    <>
      <Layout>
        <h1 className="title">
          ניהול תזרים מזומנים
        </h1>
        <Splash splashData={splashData} />
      </Layout>
    </>
    //
  )
}
