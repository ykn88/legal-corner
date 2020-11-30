import React from 'react'
import styles from '../styles/Test.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Accordian from './Accordian'

const About = ({singleProduct}) => {
    return ( 
        <div>
         <div className={styles.introMain}>
                <div className={styles.heading}>
                    <h3>FREQUENTLY ASKED QUESTION</h3>
                </div>
                <div className={styles.headings}>
                    <h2>{singleProduct.name}</h2>   
                    <p><ExternalLinkIcon /></p>
                </div>
            </div>
        <div className={styles.mainDiv}>
        <div className={styles.acc}>
            {singleProduct.faq.map(list => (
                <div key ={list.id} className={styles.accs}>
                    <Accordian list = {list}/>
                </div>
            ))}
           
        </div>
        
        
</div>
</div>
    )
}

export default About
