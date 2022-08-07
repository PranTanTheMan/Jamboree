
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FiLock } from 'react-icons/fi';
import { GiAlarmClock } from 'react-icons/gi';
import { CgMusicSpeaker } from 'react-icons/cg';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Jamboree | Contact </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="contact-title">
        <h1 className="contact-title-text">What's on your mind?</h1>
      </div>
      <div class="contct-container">
        <div className="form-contact">
          <form>
            <input type="text" id="fname" name="firstname" placeholder="Enter your name" />

            <input type="text" id="fname" name="email" placeholder="Enter your email" />

            <input className="mind-thing" type="text" id="fname" name="mind" placeholder="What's on your mind?" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div class="contact-text-section">
          <div class="contact-text-sub">
            <div> <GiAlarmClock className="alarm-icon" /></div>
            <h1>Fast response</h1>
            <p>We tend to response as soon as
              possible to your messages. Specifically,
              within 1-2 hours.</p>
          </div>
          <br></br><br></br>
          <div class="contact-text-sub">
            <div> <CgMusicSpeaker className="alarm-icon" /></div>
            <h1>Speak freely</h1>
            <p>We are always opened to feedback.
              Feel free to contact us for bug reports,
              feedback or any issues you are dealing
              with.</p>
          </div>
        </div>
      </div>
<Footer />
    </div>
    
  )
}
function newFunction() {
  return <input type="submit" value="Submit"> </input>;
}

