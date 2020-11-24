import Head from "next/head" 
import styles from '../styles/pages/contato.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"
import WhatsappButton from "../components/WhatsappButton"

const Contato = () => {
  return (
      <>
        <Head>
            <title>Contato Split Confort</title>

            <link rel="canonical" href="https://www.splitconfort.com.br/contato"/>

            <meta name="description" content="qual ar condicionado comprar" />
            <meta name="keywords" content="Contato. Entre em contato conosco escolhendo qual a melhor forma, seja ela via telefone, e-mail ou nosso formulário!" />
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
            <PageTitle background = '/contato.svg' >
                <h1>FALE <b>CONOSCO</b></h1>
            </PageTitle>

            <Wrapper>
                <section className = {styles.form_section} >
                    <h2>SOLICITE SEU ORÇAMENTO</h2>
                    <p>Nossa equipe de atendimento entrará em contato o mais rápido possível.</p>

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
            </Wrapper>
        </main>
        <WhatsappButton/>
        <Footer/>
      </>
  )
}

export default Contato;