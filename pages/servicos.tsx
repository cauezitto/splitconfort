import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"
import styles from '../styles/pages/servicos.module.css'

import FormSection from '../components/FormSection'
import { useState } from "react"

const Servicos = () => {
  const [showModal, setShowModal] = useState(false)
  return (
      <div id = {styles.servicos} >
          <Head>
              <title>
                  Serviços
              </title>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Head>

          <Header/>

          <PageTitle background = '/servicos.svg' >
            <h1>
                NOSSOS <br/>
                <b>SERVIÇOS</b>
            </h1>
          </PageTitle>
          <main>
            <Wrapper>
              <section className = {styles.laudo_section} >
                <div className = {styles.icon} >
                  <img src="/laudo.svg" alt="laudo técnico"/>
                </div>

                <h2>
                  LAUDO TRANSPARENTE
                </h2>

                <p>
                  Fique por dentro de todos os procedimentos e <b> prioridades dos serviços realizados</b>
                </p>

                <p>
                  Através do <b>laudo técnico transparete</b>, você é informado sobre <b>todos os detalhes</b> das etapas a serem realizadas no seu projeto, ou manutenção.
                </p>

                <p>
                  Com a <b>Split confort</b>, você tem todo o <b>conforto, segurança</b> e <b>tranquilidade</b> que precisa em sua casa ou ambiente de trabalho.
                </p>

                <div className = {styles.skills}>
                  <strong>
                    <img src="/check.svg" alt="check"/>
                    &nbsp;
                    Conforto
                  </strong>

                  <strong>
                    <img src="/check.svg" alt="check"/>
                    &nbsp;
                    Segurança
                  </strong>

                  <strong>
                    <img src="/check.svg" alt="check"/>
                    &nbsp;
                    Tranquilidade
                  </strong>
                </div>

              </section>

              <section className = {styles.maintenance_section}>
                <div className = {styles.maintenance_type_container}>
                  <div className = {styles.icon} >
                    <img src="/corretiva.svg" alt="manuteção corretiva"/>
                  </div>
                  <div className = {styles.text_box}>
                    <h2>
                      MANUTENÇÃO <br/> <b>CORRETIVA</b>
                    </h2>

                    <p>
                    Algum problema inesperado? 
                    estamos aqui <b>quando você mais precisa!</b>
                    Evite surpresas e <a href = '/contato' > faça o seu chamado aqui. </a>
                    Iremos lhe retorna o mais breve possível!  
                    </p>

                    <div className = {styles.skills_column}>
                  <strong>
                    <img src="/check.svg" alt="check"/>
                    &nbsp;
                    Agilidade
                  </strong>

                  <strong>
                    <img src="/check.svg" alt="check"/>
                    &nbsp;
                    Eficiência
                  </strong>
                </div>
                    
                  </div>
                </div>

                <div className = {styles.maintenance_type_container}>
                  <div className = {styles.icon}>
                    <img src="/preventiva.svg" alt="manutenção preventiva"/>
                  </div>
                  <div className = {styles.text_box}>
                    <h2>
                      MANUTENÇÃO <br/> <b>PREVENTIVA</b>
                    </h2>

                    <p>
                    <b>Não deixe para depois!</b> Para sua segurança,
                    é essencial fazer a manutenção periódica do seu <b>ar condicionado.</b>
                    Entre em contato com a nossa equipe para <a href="/contato">orçar agora.</a>
                    </p>

                  <div className = {styles.skills_column}>
                    <strong>
                      <img src="/check.svg" alt="check"/>
                      &nbsp;
                      Prevenção
                    </strong>

                    <strong>
                      <img src="/check.svg" alt="check"/>
                      &nbsp;
                      Economia
                    </strong>
                </div>
                  </div>
                </div>
              </section>

              <section className = {styles.instalation_section} >
                <div className = {styles.icon}>
                  <img src="/corretiva.svg" alt="/instalação"/>
                </div>

                <div className = {styles.text_box}>
                  <h2>INSTALAÇÃO E <b>INFRAESTRUTURA</b></h2>

                  <p>
                  Faremos seu projeto <b>do zero até o final</b>, incluindo toda a <b>infraestrutura</b> necessária, sempre seguindo as normas exigidas pela <b>ABNT</b>. Com a <b>Split confort</b>, você se preocupa com oque <b>realmente importa!</b>
                  </p>

                  <div className = {styles.skills}>
                    <strong>
                      <img src="/check.svg" alt="check"/>
                      &nbsp;
                      Praticidade
                    </strong>

                    <strong>
                      <img src="/check.svg" alt="check"/>
                      &nbsp;
                      Autonomia
                    </strong>
                  </div>
                </div>
              </section>
            </Wrapper>

            <section className = {styles.video_section}> 
              <Wrapper>
                  <div className ={styles.video_sub_wrapper}>
                    <h3>
                      CLIQUE NO <br/> PLAYER E <br/> VEJA O VIDEO
                    </h3>

                    {
                      showModal?(
                        <video src="/video.mp4" style = {{height: 300, width: 'auto', maxWidth: '100%', transition:'250ms ease-in-out'}} autoPlay onEnded = {()=>{setShowModal(false)}} controls/>
                      ):(
                        <img src="/notebook.svg" alt="notebook" onClick = {() =>{setShowModal(true)}} />
                      )
                    }
                  </div>
              </Wrapper>
            </section>

            <Wrapper>
              <FormSection/>
            </Wrapper>
          </main>
          <Footer/>
      </div>
  )
}

export default Servicos;