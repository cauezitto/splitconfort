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
                    <b>CONDICIONADOS</b>
                </h1>
            </PageTitle>
          <main>
            <Wrapper>
                <section className = {styles.introduction_section} >
                    <h2>
                        QUAL SISTEMA DE AR CONDICIONADO COMPRAR?
                    </h2>

                    <p>
                        É preciso saber escolher bem o modelo de <b>ar condicionado</b> para não errar na compra. Veja aqui as nossas <b>recomendações</b> para você!
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
                                É o modelo mais comercializado no mercado atualmente. Por ser <b>econômico</b> e <b>discreto</b>, é a escolha ideal para <b>ambientes menores</b> como: <b>casas</b>, <b>pequenos comércios</b> e <b>escritórios</b> <br/>
                            </p>
                        </div>
                    </section>


                    <section className = {styles.sub_section} >
                        <h2>
                            MULT <b>SPLIT</b>
                        </h2>

                        <div className = {styles.row}>
                            <p>
                                O <b>mult split</b> e o <b>split wall</b> são bem semelhantes. se você que ter o controle de <b>2 ou mais ambientes</b>, essa é a escolha certa para você
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
                               Por ficar <b>posicionado no teto</b> e ter um ótimo <b>controle do pluxo de ar</b>, o split cassete é ótimo para você que quer climatizar <b>ambientes de médio a grande porte</b> como por exemplo: <b>Salões de festas</b>, <b>salas de aula</b> e etc
                            </p>

                        </div>
                    </section>


                    <section className = {styles.sub_section} >
                        <h2>
                            VRF
                        </h2>

                        <div className = {styles.row}>
                            
                            <p>
                                O sistema <b>VRF</b> é um modelo unificado de refigração, que possibilita a refigeração integrada de edifícios como <b>Prédios</b>, <b>Universidades</b> e <b>Escolas</b>
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