import Head from "next/head"
import styles from '../styles/pages/arCondicionado.module.css'
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import Caroussel from 'nuka-carousel' 

const ArCondicionado = () => {
  return(
      <div id = {styles.ar_condicionado} >
          <Head>
              <title>
                  Ar condicionados
              </title>
          </Head>
          
          <Header/>

          <PageTitle background = '/sobre.svg' >
                <h1>
                    AR <br/>
                    <b>CONDICIONADO</b>
                </h1>
            </PageTitle>
          <main>
            <Wrapper>
                <section className = {styles.introduction_section} >
                    <h2>
                        DESDE A INSTALAÇÃO A MANUTENÇÃO
                    </h2>

                    <p>
                    Através do laudo técnico transparete, você é informado sobre todos os detalhes das etapas a serem realizadas no seu projeto, 
                    ou manutenção.

                    Com a Split confort, você tem todo o conforto, segurança e tranquilidade que precisa em sua casa ou ambiente de trabalho.
                    </p>
                </section>

                <section className = {styles.spliters_section} >
                    <h1>
                        SPLITERS 
                    </h1>

                    <section className = {styles.sub_section} >
                        <h2>
                            SPLIT <b>WALL</b>
                        </h2>

                        <div className = {styles.row}>
                            <img src="/splitWall.svg" alt="split wall"/>
                            <p>
                                Através do laudo técnico transparete, você é informado sobre todos os detalhes das etapas a serem realizadas no seu projeto, ou manutenção. Com a Split confort, você tem todo o conforto, segurança e tranquilidade que precisa em sua casa ou ambiente de trabalho.
                            </p>
                        </div>
                    </section>


                    <section className = {styles.sub_section} >
                        <h2>
                            MULT <b>SPLIT</b>
                        </h2>

                        <div className = {styles.row}>
                            <p>
                                Através do laudo técnico transparete, você é informado sobre todos os detalhes das etapas a serem realizadas no seu projeto, ou manutenção. Com a Split confort, você tem todo o conforto, segurança e tranquilidade que precisa em sua casa ou ambiente de trabalho.
                            </p>

                            <img src="/multSplit.svg" alt="mult split"/>
                        </div>
                    </section>


                    <section className = {styles.sub_section} >
                        <h2>
                            SPLIT <b>CASSETE</b>
                        </h2>

                        <div className = {styles.row}>

                            <img src="/splitCassete.svg" alt="split cassete"/>
                            
                            <p>
                                Através do laudo técnico transparete, você é informado sobre todos os detalhes das etapas a serem realizadas no seu projeto, ou manutenção. Com a Split confort, você tem todo o conforto, segurança e tranquilidade que precisa em sua casa ou ambiente de trabalho.
                            </p>

                        </div>
                    </section>


                    <section className = {styles.sub_section} >
                        <h2>
                            VRF
                        </h2>

                        <div className = {styles.row}>
                            
                            <p>
                                Através do laudo técnico transparete, você é informado sobre todos os detalhes das etapas a serem realizadas no seu projeto, ou manutenção. Com a Split confort, você tem todo o conforto, segurança e tranquilidade que precisa em sua casa ou ambiente de trabalho.
                            </p>

                            <img src="/vrf.svg" alt="split wall"/>
                        </div>
                    </section>

                    <section className = {styles.sub_section} >
                        <h2>
                            MARCAS <b>CREDENCIADAS</b>
                        </h2>

                        <div className = {styles.row}>
                        <Caroussel 
                        autoplay
                        autoplayInterval = {10000}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <button className = {styles.caroussel_button} onClick={previousSlide}>
                                <IoIosArrowBack size = '30' />
                            </button>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <button className = {styles.caroussel_button}  onClick={nextSlide}>
                                <IoIosArrowForward size = '30' />
                            </button>
                        )}  >

                           <div className = {styles.brands_container} >
                               
                           </div>
                        </Caroussel>
                        </div>
                    </section>
                </section>
            </Wrapper>
          </main>
      </div>
  )
}

export default ArCondicionado;