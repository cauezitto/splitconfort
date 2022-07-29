import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import styles from './styles.module.css'
import axios from 'axios'
const FormSection = () => {
  const handleSubmit = async (event:React.SyntheticEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const data = {
        nome: event.target[0].value,
        tel: event.target[1].value,
        mail: event.target[2].value,
        text: event.target[3].value
    }

    await axios.post('/api/mail', data)
    .then(()=>alert('Muito obrigado!, Entraremos em contato em breve'))
}

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
                    <a href="https://m.facebook.com/www.splitconfort.com.br/?ref=bookmarks"><FaFacebookF/></a>
                    <a href="https://www.instagram.com/splitconfort/"><FaInstagram/></a>
                  </div>
              </div>

              <form onSubmit={handleSubmit}>
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