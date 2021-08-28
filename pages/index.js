import Head from 'next/head'
import Sidebar from '../components/Sidebar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Lets Build Whatsapp 2.0</h1> */}
      <Sidebar/>
      </div>
  )
}
