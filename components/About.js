import React from 'react'
import styles from '../styles/Test.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Accordian from './Accordian'

const About = () => {
    return ( 
        <div>
         <div className={styles.introMain}>
                <div className={styles.heading}>
                    <h3>FREQUENTLY ASKED QUESTION</h3>
                </div>
                <div className={styles.headings}>
                    <h2>Private Limited Company Registration</h2>   
                    <p><ExternalLinkIcon /></p>
                </div>
            </div>
        <div className={styles.mainDiv}>
        <div className={styles.acc}>
            <div className={styles.accs}>
                <Accordian />
            </div>
            <div className={styles.accs}>
                <Accordian />
            </div>
            <div className={styles.accs}>
                <Accordian />
            </div>
            <div className={styles.accs}>
                <Accordian />
            </div>
            <div className={styles.accs}>
                <Accordian />
            </div>
        </div>
        
        
</div>
</div>
    )
}

export default About
