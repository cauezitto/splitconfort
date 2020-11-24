import {FaWhatsapp} from 'react-icons/fa'
import styles from './styles.module.css'

const WhatsappButton = () => {
  return(
      <a className = {styles.button} href="https://api.whatsapp.com/send?phone=5511981165512&text=Quero fazer um orçamento">
        <FaWhatsapp/>
      </a>
  )
}

export default WhatsappButton;