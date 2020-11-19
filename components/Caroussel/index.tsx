import React, {useState} from 'react'

import Caroussel from 'nuka-carousel';
import styles from './styles.module.css'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

export default function CarousselContainer() {
    const chevronWidth = 40;

    return (
        <div className = {styles.caroussel} style={{ padding: `0 ${chevronWidth}px`}}>
            <Caroussel 
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    <img src= '/bannerHome1.webp'/>
                    <img src= '/bannerHome1.webp'/>
                    <img src= '/bannerHome1.webp'/>
                    <img src= '/bannerHome1.webp'/>
            
            </Caroussel>
        </div>
    )
}
