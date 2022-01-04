import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minha figurinha</title>
        <meta name="description" content="Cria uma figurinha da Copa do Mundo com a sua cara!" />
      </Head>

      <h1>Minha figurinha</h1>

      <div className={ styles.uploadContainer}>
        <span>Image</span>
        <p>Arraste sua imagem aqui</p>
        <p>ou</p>
        <button>Procurar</button>
      </div>

      <p>Termos de Uso</p>

    </div>
  )
}
