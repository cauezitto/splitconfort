import Head from "next/head"
import styles from '../styles/pages/sobre.module.css'
import Header from "../components/Header/Header"
import PageTitle from '../components/PageTitle'
import Wrapper from "../components/Wrapper/Wrapper"
import Caroussel from 'nuka-carousel';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { useState } from "react"
import Footer from "../components/Footer"
import Link from "next/link"
import WhatsappButton from "../components/WhatsappButton"

const Sobre = () => {
    const [slideIndex, setSlideIndex] = useState(0)
  return(
    <div id = {styles.sobre} >
        <Head>
            <title>
                Sobre Nós - Split Confort
            </title>

            <link rel="canonical" href="https://splitconfort.com.br/sobre"/>
            <link rel="canonical" href="https://splitconfort.com.br/sobre"/>
            <meta property="og:title" content="Manutenção e Instalação de ar condicionados em São Paulo - Seriços Split Confort"></meta>
            <meta property="og:url" content="https://splitconfort.com.br/servicos"></meta>
            <meta property="og:description" content="Serviços de Manutenção de Ar Condicionado. Serviços de Manutenção de Ar Condicionado. Higienização de ar condicionados"></meta>
            <meta property="og:image" content="https://splitconfort.com.br/servicos.svg"/>
            <meta property="og:image:type" content="image/svg"/>
            <meta property="og:image:width" content="1710"/> 
            <meta property="og:image:height" content="525"></meta>

            <meta name="description" content="CONHEÇA NOSSOS 12 ANOS DE TRAJETORIA - Split Confort Ar condicionados" />
            <meta name="keywords" content="Manutenção de Ar Condicionado, manutenção de ar condicionado em sp, manutenção de ar condicionado em são paulo, serviço de manutenção de ar condicionado, empresa de manutenção de ar condicionado, preço de manutenção de ar condicionado, manutenção de ar condicionado onde encontrar, fazer manutenção de ar condicionado, manutenção e manutenção de ar condicionado, contrato de manutenção de ar condicionado, instalação e manutenção de ar condicionado" />
            <meta name="language" content="PT-BR" />
            <meta name="robots" content="index, follow" />
            <meta name="url" content="https://splitconfort.com.br/sobre" />
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
        <PageTitle background = '/sobre.svg' >
            <h1>QUEM <br/>
            <b>SOMOS</b></h1>
        </PageTitle>

        <main>
            <Wrapper>
            <section className = {styles.history_section} >
                <h2>
                    CONHEÇA NOSSOS <b>12 ANOS </b> <br/>
                        DE TRAJETORIA
                </h2>
            </section>

            <section className = {styles.mission_and_vision_section} >
                    <div className = {styles.item}>
                        <img src="/target.svg" alt="missão" className = {styles.icon}/>
                        <div className = {styles.text_box}>
                                <h2>
                                    MISSÃO
                                </h2>

                            <p>
                                Gerar soluções no campo de <b>climatização</b> e <b>ar condicionado</b>,
                                priorizando um ambiente confortável, agradável e principalmente <b>seguro.</b> 
                            </p>
                        </div>
                    </div>


                    <div className = {styles.item}>
                        <img src="/eye.svg" alt="missão" className = {styles.icon}/>
                        <div className = {styles.text_box} >
                                <h2>
                                    VISÃO
                                </h2>

                            <p>
                            Somos uma empresa forte, competitiva, trabalhamos com <b>técnicos especializados</b>, buscando sempre a <b>excelência do serviço</b>. 
                            </p>
                        </div>
                    </div>
            </section>
        </Wrapper>
        <Wrapper>
            <img src={'/list.svg'} alt="nosso valores" style = {{marginBottom: -90}} className = {styles.icon}/>
        </Wrapper>
        <section className = {styles.values_section}>
           <Wrapper>
            <h2>
                VALORES
            </h2>

                <div className = {styles.options_container} >
                    <option style = {{backgroundColor: slideIndex === 0? '#01D7FC': '#f2f2f2'}} onClick = {()=>{setSlideIndex(0)}} > HONESTIDADE </option>
                    <option style = {{backgroundColor: slideIndex === 1? '#01D7FC': '#f2f2f2'}} onClick = {()=>{setSlideIndex(1)}} > TRANSPARÊNCIA </option>
                    <option style = {{backgroundColor: slideIndex === 2? '#01D7FC': '#f2f2f2'}} onClick = {()=>{setSlideIndex(2)}} > SEGURANÇA </option>
                </div>

                    <Caroussel 
                        autoplay
                        autoplayInterval = {10000}
                        slideIndex = {slideIndex}
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

                            <div className = {styles.text_box} >
                                
                                <h3>
                                    HONESTIDADE
                                </h3>

                                <p>
                                De forma honesta, viemos criando nossa história. Sejam clientes ou colaboradores, queremos que todos sintam a mesma confiança que temos pelo nosso trabalho.
                                </p>
                            </div>

                            <div className = {styles.text_box} >
                                
                                <h3>
                                    TRANSPARÊNCIA
                                </h3>

                                <p>
                                    Queremos que você fique sempre por dentro de tudo! Por isso, nosso laudo técnico transparente lhe deixará informado sobre todos os procedimentos e problemas solucionados no seu ar condicionado
                                </p>
                            </div>

                            <div className = {styles.text_box} >
                                
                                <h3>
                                    SEGURANÇA
                                </h3>

                                <p>
                                    Priorizando a segurança, sempre seguimos as normas exigidas pela ABNT para instalação e manutenção de ar condicionados
                                </p>
                            </div>
                        </Caroussel>
            
            <div className = {styles.values_container}>
                
            </div>
           </Wrapper>
           </section>

            <Wrapper>
                <section className = {styles.go_to_portifolio} >
                        <h2>
                        CONHEÇA NOSSOS PRINCIPAIS <b>PARCEIROS</b>
                        </h2>

                        <Link href = '/portifolio' passHref>
                            <a>
                                CONHENCER
                            </a>
                        </Link>
                </section>
            </Wrapper>
           </main>

        <Footer />
        <WhatsappButton/>
    </div>
  )
}

export default Sobre;