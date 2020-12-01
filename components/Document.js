import React from 'react'
import styles from '../styles/Document.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Document = ({singleProduct}) => {
    return (
        <div className={styles.intro}>
        <div className={styles.introMain}>
            <div className={styles.heading}>
                <h3>DOCUMENT REQUIRMENTS</h3>
            </div>
            <div className={styles.headings}>
                <h2>{singleProduct.name}</h2>   
                <p><ExternalLinkIcon /></p>
            </div>
        </div>
        <div className={styles.container}>
            {singleProduct.document.map(list => (
                <div className={styles.containt}>
                    <div className={styles.num}>
                        <p className={styles.numP}>1</p>
                        <h3>{list.name}</h3>
                    </div>
                    <div className={styles.para}>
                        <p>{list.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Document
