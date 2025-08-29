import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './styles.module.scss'

export const App=()=>{
  return (
    <main className={styles.contentWrap}>
      <section className={styles.chatContainer}>
        <div className={styles.chatHeader}>Room</div>
        <ul className={styles.chatWindow}>
          <li>msg 1</li>
          <li>msg 12</li>
          <li>msg 13</li>
        </ul>
        <div className={styles.chatFooter}>
          <textarea  />
          <button>Send</button>
        </div>
      </section>
    </main>
  )
}

