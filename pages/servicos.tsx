import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"
import styles from '../styles/pages/servicos.module.css'

import FormSection from '../components/FormSection'
import { useState } from "react"
import WhatsappButton from "../components/WhatsappButton"

const Servicos = () => {
  const [showModal, setShowModal] = useState(false)
  return (
      <div id = {styles.servicos} >
          <Head>
              <title>
                  Manutenção e Instalação de ar condicionados em São Paulo - Split Confort
              </title>
                <link rel="canonical" href="https://splitconfort.com.br/servicos"/>
                <meta name="description" content="Conheça nossos parceiros" />
                <meta name="keywords" content="Manutenção de Ar Condicionado, manutenção de ar condicionado em sp, manutenção de ar condicionado em são paulo, serviço de manutenção de ar condicionado, empresa de manutenção de ar condicionado, preço de manutenção de ar condicionado, manutenção de ar condicionado onde encontrar, fazer manutenção de ar condicionado, manutenção e manutenção de ar condicionado, contrato de manutenção de ar condicionado, instalação e manutenção de ar condicionado" />
                <meta name="language" content="PT-BR" />
                <meta name="robots" content="index, follow" />
                <meta name="url" content="https://splitconfort.com.br/servicos" />
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
          <WhatsappButton/>
      </div>
  )
}

export default Servicos;