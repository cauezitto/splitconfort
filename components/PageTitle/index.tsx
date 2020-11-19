import React from 'react';

import styles from './styles.module.css'

interface Props{
  background: string,
  children: Element
}

const PageTitle = ({children, background}) => {
  return(
      <section 
        className = {styles.page_title_container}
        style = {{backgroundImage: `url("${background}")`}} >
          <div className = {styles.overlay} >
            {children}
          </div>
      </section>
  )
}

export default PageTitle;