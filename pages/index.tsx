import Head from 'next/head'
import styles from '../styles/pages/home.module.css'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Caroussel from '../components/Caroussel'
import Wrapper from '../components/Wrapper/Wrapper'
import Footer from '../components/Footer'

import InstagramSection from '../components/InstagramSection'
import WhatsappButton from '../components/WhatsappButton'


export default function Home() {
  
  return (
    <div id = {styles.home}>
      <Head>
        <title>Manutenção de Ar Condicionado - Split Confort</title>

        <link rel="canonical" href="https://www.splitconfort.com.br/"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Serviços de Manutenção de Ar Condicionado. Serviços de Manutenção de Ar Condicionado. Higienização de ar condicionados" />
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

            <Link href = '/sobre' passHref>
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
                      <Link href = '/servicos' passHref>
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
              Somos credenciados por <br/> grandes marcas como <br/> LG, Samsung, Fugitsu e <br/> muito <a href = '/ar-condicionado' > <span><img src="/plus.svg" alt="mais" className = {styles.plus}/></span> </a>
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
      <WhatsappButton/>
    </div>
  )
}
