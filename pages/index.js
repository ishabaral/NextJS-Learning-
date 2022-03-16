import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [session, loading] = useSession()
  console.log(session)
  return (
    <div className={styles.container}>
      <h1>Welcome {session && session.user.name}</h1>
    </div>
  )
}
