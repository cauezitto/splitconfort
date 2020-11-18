import Link from 'next/link';
import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import {HiPhone} from 'react-icons/hi'
import {MdPhoneIphone, MdMail} from 'react-icons/md'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import styles from './styles.module.css';

const Footer = () => {
  return(
    <footer className = {styles.footer} >
      <Wrapper>
        <div className = {styles.footer_sub_container} > 
          <section className = {styles.footer_item} >
            <h4>
              FALE COM NOSSA <br/> EQUIPE
            </h4>

            <ul>
              <li>
                  <a href = 'tel:2667-3338' >
                    <HiPhone/> &nbsp; (11) 2667-3338  
                  </a>
              </li>

              <li>
                  <a href = 'tel:9811-65512' >
                    <MdPhoneIphone/> &nbsp; (11)9811-65512  
                  </a>
              </li>

              <li>
                  <a href = 'mailto:splitconfort@gmail.com' >
                    <MdMail/> &nbsp; splitconfort@gmail.com
                  </a>
              </li>
            </ul>
          </section>

          <section className = {styles.footer_item} >
            <h4>
              REDES <br/> SOCIAIS
            </h4>

            <ul className ={styles.flex} >
              <li>
                  <a href = 'https://m.facebook.com/www.splitconfort.com.br/?ref=bookmarks' target = '_blank' >
                    <FaFacebookF/>  
                  </a>
              </li>

              <li>
                  <a href = 'https://www.instagram.com/splitconfort/'target = '_blank' >
                    <FaInstagram/>  
                  </a>
              </li>
            </ul>
          </section>

          <section className = {styles.footer_item} >
            <h4>
              HORÁRIO DE <br/> ATENDIMENTO
            </h4>

            <ul>
              <li>
                  <p>
                    Seg a Sex de 08h às 18h
                  </p>

                  <p>
                    Sábado de 08h às 14h
                  </p>
              </li>
            </ul>
          </section>

          <section className = {styles.footer_item} >
            <h4>
              LOCALIZAÇÃO
            </h4>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.12042639184!2d-46.53966128533753!3d-23.564117967578504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dc2fa585d17%3A0x89c9f9f262e78f6c!2sR.%20Cabinari%2C%20132%20-%20Vila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003364-050!5e0!3m2!1spt-BR!2sbr!4v1605714635556!5m2!1spt-BR!2sbr" 
            allowFullScreen = {false}
            aria-hidden = {false}
            tabIndex= {0}/>
            <br/>
            <br/>
            <a href="https://goo.gl/maps/GMgtX7xSCEeqZo4Z6" target = '_blank' className = {styles.route_link}>
              <u>Ver rotas no Google Maps</u>
            </a>
          </section>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer;