import React, {useState} from 'react'

import Caroussel from 'react-items-carousel';
import styles from './styles.module.css'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

export default function CarousselContainer() {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div className = {styles.caroussel} style={{ padding: `0 ${chevronWidth}px`}}>
            <Caroussel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<IoIosArrowBack size = {30} />}
                    rightChevron={<IoIosArrowForward size = {30} />}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                <img src='/ar.png' alt="ar condicionado"/>
                <img src='/ar.png' alt="ar condicionado"/>
                <img src='/ar.png' alt="ar condicionado"/>
                <img src='/ar.png' alt="ar condicionado"/>
                </Caroussel>
        </div>
    )
}
