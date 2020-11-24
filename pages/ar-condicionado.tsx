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
import WhatsappButton from "../components/WhatsappButton"

const ArCondicionado = () => {
  const chevronWidth = 40;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return(
      <div id = {styles.ar_condicionado} >
          <Head>
            <title>
                Qual Ar condicionado comprar - Split Confort
            </title>

            

            <meta name="description" content="qual ar condicionado comprar" />
            <meta name="keywords" content="Manutenção de Ar Condicionado, manutenção de ar condicionado em sp, manutenção de ar condicionado em são paulo, serviço de manutenção de ar condicionado, empresa de manutenção de ar condicionado, preço de manutenção de ar condicionado, manutenção de ar condicionado onde encontrar, fazer manutenção de ar condicionado, manutenção e manutenção de ar condicionado, contrato de manutenção de ar condicionado, instalação e manutenção de ar condicionado" />
            <meta name="language" content="PT-BR" />
            <meta name="robots" content="index, follow" />
            <meta name="url" content="https://www.splitconfort.com.br" />
            <meta name="classification" content="ar condicionado hi wall, ar condicionado multi split, ar condicionado multi v, ar condicionado split, ar condicionado self contained, ar condicionado vrf, ar condicionado vrv, ar condicionado lg, ar condicionado carrier, ar condicionado daikin, ar condicionado elgin, ar condicionado samsung, ar condicionado springer, ar condicionado midea, ar condicionado mitsubishi, climatizacao comercial, climatizacao hospitalar, climatizacao industrial, climatizacao residencial, climatizacao sala limpa, climatizacao de ambiente, climatizacao para galpao, salas climatizadas, higienizacao de fan coils, higienizacao de sistemas, higienizacao de splits, manutencao de ar condicionado, ambientes climatizados, ambientes industriais climatizados, ar condicionado, ar condicionado ambiente climatizado, ar condicionado barato, ar condicionado em bauru, ar condicionado em campinas, ar condicionado em copacabana, ar condicionado em guarulhos, ar condicionado em maceio, ar condicionado em niteroi, ar condicionado em oferta, ar condicionado em ribeirao preto, ar condicionado em rio preto, ar condicionado em santos, ar condicionado em sao paulo, ar condicionado em sorocaba, ar condicionado hospitalar, ar condicionado industrial, ar condicionado janela, ar condicionado na zona sul, ar condicionado no abc, ar condicionado no interior, ar condicionado no litoral, ar condicionado no rio de janeiro, ar condicionado no tatuape, ar condicionado para ambiente industrial, ar condicionado para apartamentos, ar condicionado para clinicas, ar condicionado para condominio, ar condicionado para construtora, ar condicionado para dutos, ar condicionado para empresas, ar condicionado para escritorios, ar condicionado para galpao, ar condicionado para hospitais, ar condicionado para hoteis, ar condicionado para industria, ar condicionado para laboratorios, ar condicionado para lojas, ar condicionado para residencia, ar condicionado para salas limpas, ar condicionado para uti, ar condicionado pelo menor preco, ar condicionado portatil, ar condicionado quente e frio, ar condicionado splitao, ar condicionado inverter, comprar ar condicionado, distribuidor de ar condicionado, distribuidor de ar condicionado carrier, distribuidor de ar condicionado chiller, distribuidor de ar condicionado daikin, distribuidor de ar condicionado elgin, distribuidor de ar condicionado mitsubishi, distribuidor de ar condicionado samsung, dutos para ar condicionado, empresa de ar condicionado, equipamentos para climatizacao industrial, higienizacao de equipamentos, industria de ar condicionado, instalacao de ar condicionado, o melhor preco para ar condicionado, projetos de ar condicionado, projetos de ar condicionado para arquitetos, projetos de ar condicionado para engenheiros, projetos de climatizacao de ambientes, projetos de climatizacao hospitalar, projetos de climatizacao industrial, projetos de climatizacao sala limpa, projetos para ar condicionados residenciais, salas industriais refrigeradas, salas refrigeradas, sistema de climatizacao em sala limpa, sistemas de climatizacao, venda de ar condicionado" />
            <meta name="rating" content="general" />
            <meta name="fone" content="98116-5512" />
            <meta name="city" content="São Paulo / SP" />
            <meta name="country" content="Brasil" />
            <meta name="geo.placename" content="Rua Cabinari, 132, São Paulo / SP" />
            <meta name="geo.region" content="São Paulo / SP-BR" />
            <meta name="creator" content="Stonks.dev" />
            <meta name="publisher" content="Stonks.dev" />
            <meta name="copyright" content="Copyright Splitconfort" />
            <meta name="MSSmartTagsPreventParsing" content="true" />
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
          <WhatsappButton/>
      </div>
  )
}

export default ArCondicionado;