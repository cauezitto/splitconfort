import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import styles from './styles.module.css'
const FormSection = () => {
  return(
      <section className = {styles.form_section} >
          <h2>
              SOLICITE SEU ORÇAMENTO
          </h2>

          <p>
          Nossa equipe de atendimento entrará em contato o mais rápido possível.
          </p>

          <div className = {styles.form_container}>
              <div className = {styles.social_midia_container}>
                  <h3>
                      REDES SOCIAIS
                  </h3>

                  <div className = {styles.links_container} >
                    <a href=""><FaFacebookF/></a>
                    <a href=""><FaInstagram/></a>
                  </div>
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
          </div>
      </section>
  )
}

export default FormSection;