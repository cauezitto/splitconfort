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
                Sobre Nós
            </title>
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