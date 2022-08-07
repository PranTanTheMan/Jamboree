import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FiLock } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <h1>Jamboree</h1>
        <li><a className="special-button" href="#">Open Chatroom</a></li>
        <li><a href="#">Contact</a></li>

        <li><a href="#">Features</a></li>
      </ul>


    </div>
  )
}
