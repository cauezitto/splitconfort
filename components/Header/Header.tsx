import React, { useState } from 'react';

import styles from './styles.module.css';
import menuStyle from './menu.module.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {RiCheckDoubleLine} from 'react-icons/ri'
import {HiPhone} from 'react-icons/hi'
import Wrapper from '../Wrapper/Wrapper'
import Link from 'next/link'
const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <header className = {styles.header} >
          <Wrapper>
          <div className={styles.contact_container}>
            <div className = {styles.social_midia_container} >
              <a href="#"><FaFacebookF size = '20' color = '#fff'/></a>
              <a href="#"><FaInstagram size = '20' color = '#fff'/></a>
            </div>

            <div className={styles.phone_container}>
              <div className = {styles.desktop_cta}>
              <Link href = '#' passHref >
                <a>
                  <RiCheckDoubleLine size = '20' color = '#01D7FC'/>
                  ORÇAR AGORA
                </a>
              </Link>
              </div>

              <a href="tel:9535-27110">
                <HiPhone size = '20' color = '#01d7fc'/>
                2667-3338
              </a>

              -

              <a href="tel:953527110">
                9811-65512
              </a>
            </div>

          </div>

          <div className = {styles.navigation_container}>
            <img src="/logo.svg" alt="split confort logo" className = {styles.logo}/>
            <nav className = {styles.desktop_nav} >
            <ul>
                <li><Link href = '/' passHref><a>HOME</a></Link></li>
                <li><Link href = '/sobre' passHref><a>SOBRE NÓS</a></Link></li>
                <li><Link href = '/ar-condicionado' passHref><a>AR CONDICIONADO</a></Link></li>
                <li><Link href = '#' passHref><a>SERVIÇOS</a></Link></li>
                <li><Link href = '#' passHref><a>PORTIFÓLIO</a></Link></li>
                <li><Link href = '#' passHref><a>CONTATO</a></Link></li>
              </ul>
            </nav>

            <div className = {menuStyle.menu_container} >
            <input id="menu-hamburguer" type="checkbox" />
              <label htmlFor="menu-hamburguer">
                <div className={menuStyle.menu} onClick = {()=>{setShow(!show)}} >
                  <span className={menuStyle.hamburguer}></span>
                </div>
              </label>
            </div>

          </div>
          </Wrapper>
      </header>

      <div className = {menuStyle.menu_bar} >
        <nav style = {{height: show? 500: 0} }>
          <ul>
                  <li><Link href = '/' passHref><a>HOME</a></Link></li>
                  <li><Link href = '/sobre' passHref><a>SOBRE NÓS</a></Link></li>
                  <li><Link href = '/ar-condicionado' passHref><a>AR CONDICIONADO</a></Link></li>
                  <li><Link href = '#' passHref><a>SERVIÇOS</a></Link></li>
                  <li><Link href = '#' passHref><a>PORTIFÓLIO</a></Link></li>
                  <li><Link href = '#' passHref><a>CONTATO</a></Link></li>
                </ul>
          </nav>
      </div>
      </>
  )
}

export default Header;