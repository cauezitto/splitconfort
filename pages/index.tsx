import Head from 'next/head'
import styles from '../styles/pages/home.module.css'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Caroussel from '../components/Caroussel'
import Wrapper from '../components/Wrapper/Wrapper'
import Footer from '../components/Footer'

import InstagramSection from '../components/InstagramSection'


export default function Home() {
  return (
    <div id = {styles.home}>
      <Head>
        <title>Split confort</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <Caroussel/>
        <Wrapper>
          <section className = {styles.skills} > 
            <h1>
              SPLIT CONFORT - <b>AR CONDICIONADOS</b>
            </h1>

            <div className = {styles.skills_container}>
              <div className = {styles.skill}>
                <img src="/qualidade.svg" alt='splitconfort qualidade no serviço' height = {120}/>
                <h2>
                  QUALIDADE NO SERVIÇO
                </h2>

                <p>
                <b>Atendimento especializado</b> e <br/>
                <b>sem taxa de visita</b> em toda <br/> São Paulo
                </p>
              </div>

              <div className = {styles.skill}>
                <img src="/atendimento.svg" alt='splitconfort qualidade no serviço' height = {100}/>
                <h2 style = {{marginTop: 35}} >
                  ATENDIMENTO PERSONALIZADO
                </h2>

                <p>
                  <b>Análise detalhada</b> do ambiente e <br/> dos equipamentos antes da <br/> instalação
                </p>
              </div>

              <div className = {styles.skill}>
                <img src="/laudo.svg" alt='splitconfort qualidade no serviço' height = {120}/>
                <h2>
                  LAUDO TRANSPARENTE
                </h2>

                <p>
                  <b>Informamos todos os procedimentos</b><br/> e prioridades dos serviços <br/>realizados
                </p>
              </div>
            </div>

            <Link href = '#' passHref>
              <a className = {styles.skills_cta} >
                SOBRE NÓS
              </a>
            </Link>
          </section>

          <section className = {styles.services_section}>
            <h2>
              NOSSOS <b>SERVIÇOS</b>
            </h2>

            <p>
            Visita Técnica - Instalação e Infra-Estrutura - Projetos,<br/>
Manutenção de ar condicionado Split, Multi Split, Split wall, Split cassete,<br/>
 VRF e muito mais
            </p>

            <div className = {styles.services_container}>
              <div className = {styles.service}>
                 <img src="/arHome.svg" alt="instalação e infraestrutura de ar condicionados"/>
                  <div className = {styles.text_box}>
                     <h3>INSTALAÇÃO<br/> <b>E INFRAESTRUTURA</b></h3>
                     <p>Elaboramos sua <b>instalação</b> do <br/> zero até a finalização conforme <br/> as normas <b>ABNT</b></p>
                      <Link href = '/servicoas' passHref>
                         <a>CONHECER</a>
                      </Link> 
                  </div> 
              </div>
              
              <div className = {styles.service}>
                 <img src="/instalacaoHome.svg" alt="instalação e infraestrutura de ar condicionados"/>
                  <div className = {styles.text_box}>
                     <h3>MANUTENÇÃO <br/> <b>AR CONDICIONADO</b></h3>
                     <p>Aumente a vida util do seu <br/> <b>ar condicionado!</b> vamos enviar um <b>especialista</b> até você</p>
                      <Link href = '/servicos' passHref>
                         <a>CONHECER</a>
                      </Link> 
                  </div> 
              </div>
              
            </div>
          </section>
        </Wrapper>

        <section className = {styles.brands_section}>
          <Wrapper>
          <div className = {styles.wrapper_container} >
          <h2>
              Somos credenciados por <br/> grandes marcas como <br/> LG, Samsung, Fugitsu e <br/> muito <a href = '#' > <span><img src="/plus.svg" alt="mais" className = {styles.plus}/></span> </a>
          </h2>

              <img src="/greeAirHome.svg" alt="Ar condicionado gree" className = {styles.gree} />
          </div>
          </Wrapper>
        </section>

        <Wrapper>
          <section className = {styles.statistics_section}>
            <div className = {styles.numbers_container}>
              <div className = {styles.projects}>
                <span>
                14.475+
                </span>

                <h4>
                  PROJETOS
                </h4>
              </div>

              <div className = {styles.clients}>
                <span>
                  4.825+
                </span>

                <h4>
                  CLIENTES
                </h4>
              </div>

              <div className = {styles.satisfaction}>
                <span>
                  100%
                </span>

                <h4>
                  SATISFAÇÃO
                </h4>
              </div>
            </div>

            <img src="/technician.svg" alt="técnico especialista"/>
          </section>

          <section className = {styles.contact_section}>
            <div className = {styles.contact_title_container} >
              <h4>
                FALE <b> CONOSCO </b> 
                <img src="/callPhoneIcon.svg" alt="fale conosco"/>
              </h4>

              <p>
              Qualquer dúvida ou sugestão, <br/>
              estamos aqui para ajudar. <br/>
              Entraremos em contato o mais breve possível.
              </p>
            </div>

            <form action="/mail.php" method="post">
              <label>Seu Nome ( * )<input type="text"/></label>
              <label>Seu Celular ( * )<input type="text"/></label>
              <label>Seu Email ( * )<input type="text"/></label>
              <label>Sua Mensagem:<textarea/></label>

              <button type = 'submit' >
                ENVIAR
              </button>
            </form>

          </section>

          <InstagramSection/>
        </Wrapper>
      </main>
      
      <Footer/>
    </div>
  )
}
