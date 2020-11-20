import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle';
import Wrapper from '../components/Wrapper/Wrapper';
import FormSection from '../components/FormSection'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'

import styles from '../styles/pages/portifolio.module.css'
import Footer from '../components/Footer';
import Caroussel from 'nuka-carousel'

const Portifolio = () => {
  return(
      <div>
          <Head>
              <title>
                  portifolio
              </title>
          </Head>

          <Header/>


          <main>
              <PageTitle background = '/portifolio.svg'>
                    <h1>
                        NOSSO <br/>
                        <b>PORTIFÓLIO</b>
                    </h1>
                </PageTitle>
              <Wrapper>
                <section className = {styles.intro_section} >
                    <img src="/portifolio.jpeg" alt="split confort ar condicionados"/>

                    <div className = {styles.text_box}>
                        <p>
                        Nós da Split Confort nos orgulhamos dos clientes e parceiros que conquistamos ao longo dos nossos 12 anos de trabalho em  diversas áreas de atuação.
                        </p>

                        <p>
                        Em nossa relação com clientes, não visualizamos somente nosso compromisso com o negócio do cliente, mas sim com os resultados alcançados.
                        </p>

                        <p>
                        Nosso maior objetivo é manter nossos clientes satisfeitos e buscar criar e manter um longo prazo, com base na integridade e comprometimento, sempre atendendo às suas necessidades.
                        </p>
                        <br/>

                        <Link href = '/sobre' passHref>
                            <a>
                                CONHECER
                            </a>
                        </Link>
                    </div>
                </section>

                <section className = {styles.clients_section} >
                    <h3>
                        PRINCIPAIS <b>CLIENTES</b>
                    </h3>

                   <div className = {styles.brands_container}>
                   <div className = {styles.brand} > <img src="/cacauShow.svg" alt="logo cacau show"/> </div>
                    <div className = {styles.brand} > <img src="/sorridents.svg" alt="logo sorridents"/> </div>
                    <div className = {styles.brand} > <img src="/anhanguera.svg" alt="logo anhanguera"/> </div>
                    <div className = {styles.brand} > <img src="/startex.svg" alt="logo starex"/> </div>
                   </div>
                </section>
              </Wrapper>

              <section className = {styles.services_section}>
                  <Wrapper>
                      <div className = {styles.sub_wrapper} >
                            <h3>
                            TRABALHOS <br/> <b>REALIZADOS</b>
                            </h3>

                            <div className={styles.caroussel_container}>
                            <Caroussel 
                                autoplay
                                autoplayInterval = {10000}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    <button className = {styles.caroussel_button} onClick={previousSlide}>
                                        <IoMdArrowDropleft size = '30' />
                                    </button>
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    <button className = {styles.caroussel_button}  onClick={nextSlide}>
                                        <IoMdArrowDropright size = '30' />
                                    </button>
                                )}  >
                                    
                                    <img src="/servico2.jpeg" alt="instalação e manutenção de ar condicionados"/>
                                    <img src="/servico3.jpeg" alt="instalação e manutenção de ar condicionados"/>
                                    <img src="/servico4.jpeg" alt="instalação e manutenção de ar condicionados"/>
                                    <img src="/servico5.jpeg" alt="instalação e manutenção de ar condicionados"/>
                                    <img src="/servico6.jpeg" alt="instalação e manutenção de ar condicionados"/>
                                   
                                </Caroussel>
                            </div>
                      </div>
                  </Wrapper>
              </section>

              <Wrapper>
                <FormSection/>
              </Wrapper>

              <Footer/>
          </main>
      </div>
  )
}

export default Portifolio;