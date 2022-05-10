import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>Duis consectetur reprehenderit pariatur est elit reprehenderit magna et. Commodo minim et aliquip qui ut nisi sit magna labore exercitation cupidatat labore consectetur. Lorem eiusmod cillum Lorem sunt laborum labore cillum consectetur magna deserunt ex. Anim cillum deserunt irure tempor commodo. Eiusmod eu ipsum deserunt commodo mollit fugiat ullamco fugiat consequat exercitation esse voluptate tempor id. Mollit irure aliqua sit nostrud elit. Est labore laborum sunt ex tempor in.</p>
        <p className={styles.text}>Duis consectetur reprehenderit pariatur est elit reprehenderit magna et. Commodo minim et aliquip qui ut nisi sit magna labore exercitation cupidatat labore consectetur. Lorem eiusmod cillum Lorem sunt laborum labore cillum consectetur magna deserunt ex. Anim cillum deserunt irure tempor commodo. Eiusmod eu ipsum deserunt commodo mollit fugiat ullamco fugiat consequat exercitation esse voluptate tempor id. Mollit irure aliqua sit nostrud elit. Est labore laborum sunt ex tempor in.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  )
}