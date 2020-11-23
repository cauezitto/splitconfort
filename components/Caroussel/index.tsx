import React, {useState} from 'react'

import Caroussel from 'nuka-carousel';
import styles from './styles.module.css'

export default function CarousselContainer() {
    const chevronWidth = 40;

    return (
        <>
        <div className = {styles.caroussel}>
            <Caroussel
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    <img src= '/banner1.svg'/>
                    <img src= '/banner2.svg'/>
                    <img src= '/banner3.svg'/>
            </Caroussel>
        </div>

        <div className = {styles.caroussel_mobile}>
            <Caroussel
             autoplay
             autoplayInterval = {8000}
             renderCenterLeftControls={({ previousSlide }) => (
                <button style = {{display: 'none'}} onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button style = {{display: 'none'}}  onClick={nextSlide}/>
            )}  >
                    <img src= '/banner1Mobile.svg'/>
                    <img src= '/banner2Mobile.svg'/>
                    <img src= '/banner3Mobile.svg'/>
            </Caroussel>
        </div>
        </>
    )
}
