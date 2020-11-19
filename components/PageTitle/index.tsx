import React from 'react';

import styles from './styles.module.css'

const PageTitle = (props) => {
  return(
      <section className = {styles.page_title_container} >
          <div className = {styles.overlay} >
            {props.children}
          </div>
      </section>
  )
}

export default PageTitle;