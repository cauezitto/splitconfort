import Head from 'next/head'
import styles from '../styles/pages/home.module.css'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Caroussel from '../components/Caroussel'
import Wrapper from '../components/Wrapper/Wrapper'


export default function Home() {
  return (
    <div id = {styles.home}>
      <Head>
        <title>Split confort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <Caroussel/>
        <Wrapper>
          <section className = {styles.skills} > 
            <h1>
              SPLIT CONFORT - <b>AR CONDICIONADOS</b>
            </h1>

            <div className = {styles.skills_container}>
              <div className = {styles.skill}>
                <img src="/qualidade.svg" alt='splitconfort qualidade no serviço' height = {120}/>
                <h2>
                  QUALIDADE NO SERVIÇO
                </h2>

                <p>
                <b>Atendimento especializado</b> e <br/>
                <b>sem taxa de visita</b> em toda <br/> São Paulo
                </p>
              </div>

              <div className = {styles.skill}>
                <img src="/atendimento.svg" alt='splitconfort qualidade no serviço' height = {100}/>
                <h2 style = {{marginTop: 35}} >
                  ATENDIMENTO PERSONALIZADO
                </h2>

                <p>
                  <b>Análise detalhada</b> do ambiente e <br/> dos equipamentos antes da <br/> instalação
                </p>
              </div>

              <div className = {styles.skill}>
                <img src="/laudo.svg" alt='splitconfort qualidade no serviço' height = {120}/>
                <h2>
                  LAUDO TRANSPARENTE
                </h2>

                <p>
                  <b>Informamos todos os procedimentos</b><br/> e prioridades dos serviços <br/>realizados
                </p>
              </div>
            </div>

            <Link href = '#' passHref>
              <a className = {styles.skills_cta} >
                SOBRE NÓS
              </a>
            </Link>
          </section>
        </Wrapper>
      </main>
      
    </div>
  )
}
