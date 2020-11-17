import React from 'react';

// import { Container } from './styles';
import styles from './styles.module.css'
const Wrapper = (props) => {
  return (
    <div className = {styles.wrapper} >
      {props.children}
    </div>
  )
}

export default Wrapper;