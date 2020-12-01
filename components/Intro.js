import React from 'react'
import styles from '../styles/Intro.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Intro = ({singleProduct}) => {
    // singleProduct = {}
    return (
        <div className={styles.intro}>
            <div className={styles.introMain}>
                <div className={styles.heading}>
                    <h3>ALL YOU NEED TO KNOW</h3>
                </div>
                <div className={styles.headings}>
                    <h2>{singleProduct.name}</h2>   
                    <p><ExternalLinkIcon /></p>
                </div>
            </div>
            <div className={styles.containt}>
                <p>
                   {/* {singleProduct.profile?.bodyDesc} */}
                   {singleProduct.long}
                </p>
                {/* <video src="https://youtu.be/4W_J6lX0aZ0" alt="not support"
                style={{border:'2px solid black'}}/> */}
                <video className="video-container video-container-overlay" autoPlay="true"  style={{border:'2px solid black'}}>
                    <source src="https://www.youtube.com/watch?v=tSIk1QvIM2E" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Intro
