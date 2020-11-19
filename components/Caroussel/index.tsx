import React, {useState} from 'react'

import Caroussel from 'nuka-carousel';
import styles from './styles.module.css'

export default function CarousselContainer() {
    const chevronWidth = 40;

    return (
        <div className = {styles.caroussel} style={{ padding: `0 ${chevronWidth}px`}}>
            <Caroussel
            height = {500} 
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    <img src= '/banner.jpeg'/>
                    <img src= '/banner.jpeg'/>
                    <img src= '/banner.jpeg'/>
                    <img src= '/banner.jpeg'/>
            </Caroussel>
        </div>
    )
}
