import Image from 'next/image'
import styles from '../styles/About.module.css'


export default function About() {
  return(
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>Projeto desenvolvido em Next, usando Poke API</p>
      <Image src="/images/raichu.png" width="300px" height="300px" alt="raichu"/>
    </div>
  )
}