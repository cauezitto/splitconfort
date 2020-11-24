import React, {useState} from 'react'

import Caroussel from 'nuka-carousel'
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
                    <img src= '/banner1.svg' alt = 'técnico fazendo manutenção no ar condicionado e projetos, instalação e infraestrutura escrito ao lado' />
                    <img src= '/banner2.svg' alt = 'técnico fazendo manutenção no ar condicionado e Manutenção de ar condicionados escrito ao lado' />
                    <img src= '/banner3.svg' alt = 'técnico fazendo manutenção no ar condicionado e atendimento especializado escrito ao lado'/>
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
