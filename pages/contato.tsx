import Head from "next/head"
import styles from '../styles/pages/contato.module.css'
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper/Wrapper"

const Contato = () => {
  return (
      <>
        <Head>
            <title>Contato</title>
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

        <Footer/>
      </>
  )
}

export default Contato;