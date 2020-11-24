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
import WhatsappButton from '../components/WhatsappButton';

const Portifolio = () => {
  return(
      <div>
          <Head>
              <title>
                  Conheça Nossos Parceiros - Split Confort Ar condicionados
              </title>

              <link rel="canonical" href="https://www.splitconfort.com.br/portifolio"/>

                <meta name="description" content="Conheça nossos parceiros" />
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
          <WhatsappButton/>
      </div>
  )
}

export default Portifolio;