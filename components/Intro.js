import React from 'react'
import styles from '../styles/Intro.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introMain}>
                <div className={styles.heading}>
                    <h3>ALL YOU NEED TO KNOW</h3>
                </div>
                <div className={styles.headings}>
                    <h2>Private Limited Company Registration</h2>   
                    <p><ExternalLinkIcon /></p>
                </div>
            </div>
            <div className={styles.containt}>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                <br /> <br /> adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iureexercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
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
