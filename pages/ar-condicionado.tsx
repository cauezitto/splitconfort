import Head from "next/head"
import Link from 'next/link'
import styles from '../styles/pages/arCondicionado.module.css'
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import Caroussel from 'nuka-carousel' 
import { useState } from "react"
import Footer from "../components/Footer"

const ArCondicionado = () => {
  const chevronWidth = 40;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return(
      <div id = {styles.ar_condicionado} >
          <Head>
              <title>
                  Ar condicionados
              </title>
          </Head>
          
          <Header/>

          <PageTitle background = '/ar-condicionado.svg' >
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

                    <section className = {styles.caroussel_section} >
                        <h2>
                            MARCAS <b>CREDENCIADAS</b>
                        </h2>
                        
                        <div className = {styles.caroussel_container} >
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
                                  
                                  <div className = {styles.brand}>
                                    <img src="/samsumg.svg" alt="samsumg"/>
                                  </div>

                                  <div className = {styles.brand}>
                                    <img src="/fujitsu.svg" alt="fujitsu"/>
                                  </div>

                                  <div className = {styles.brand}>
                                    <img src="/lg.svg" alt="LG"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container} >
                                  
                                  <div className = {styles.brand}>
                                    <img src="/carrier.png" alt="carrier"/>
                                  </div>

                                  <div className = {styles.brand}>
                                    <img src="/daikin.png" alt="daikin"/>
                                  </div>

                                  <div className = {styles.brand}>
                                    <img src="/midea.png" alt="midea"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container} >
                                  
                                  <div className = {styles.brand}>
                                    <img src="/electrolux.png" alt="carrier"/>
                                  </div>

                                  <div className = {styles.brand}>
                                    <img src="/consul.png" alt="consul"/>
                                  </div>
                              </div>
                          </Caroussel>
                        </div>

                        <div className = {styles.caroussel_container_mobile} >
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
                                  <div className = {styles.brand}>
                                    <img src="/samsumg.svg" alt="samsumg"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container}>
                                  <div className = {styles.brand}>
                                    <img src="/fujitsu.svg" alt="fujitsu"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container}>
                                  <div className = {styles.brand}>
                                    <img src="/lg.svg" alt="LG"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container} >
                                  <div className = {styles.brand}>
                                    <img src="/carrier.png" alt="carrier"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container} >
                                  <div className = {styles.brand}>
                                    <img src="/daikin.png" alt="daikin"/>
                                  </div>
                            </div>

                            <div className = {styles.brands_container} >
                                  <div className = {styles.brand}>
                                    <img src="/midea.png" alt="midea"/>
                                  </div>
                              </div>

                              <div className = {styles.brands_container} >
                                  
                                  <div className = {styles.brand}>
                                    <img src="/electrolux.png" alt="carrier"/>
                                  </div>
                             </div>

                             <div className = {styles.brands_container} >
                                  <div className = {styles.brand}>
                                    <img src="/consul.png" alt="consul"/>
                                  </div>
                              </div>
                          </Caroussel>
                        </div>
                        
                    </section>
                </section>
            </Wrapper>

            <section className = {styles.go_to_contact} >
                <Wrapper>
                        <div>
                            <h2>
                            FAÇA UM ORÇAMENTO <br/> <b>CONOSCO</b>
                            </h2>

                            <Link href = '/contato' passHref>
                                <a>
                                    ORÇAR
                                </a>
                            </Link>
                        </div>
                </Wrapper>
            </section>
          </main>

          <Footer/>
      </div>
  )
}

export default ArCondicionado;