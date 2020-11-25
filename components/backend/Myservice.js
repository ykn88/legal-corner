import { EditIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/backend/Service.module.scss'

const Myservice = () => {
    return (
        <div>
            <div className={styles.head}>
            <div className={styles.item}>
            <h2>MY SERVICE</h2>
            <h2> <Link href="form"><a>+ ADD NEW SERVICE</a></Link> </h2>
            </div>
            </div>

            <div className={styles.mainDiv}>
                <div className={styles.items}>
                <h3>Private Limited Company</h3>
                <p><Link href="form"><a><EditIcon /> </a></Link> </p>

                </div>

            </div>
            <div className={styles.mainDiv}>
                <div className={styles.items}>
                <h3>Private Limited Company</h3>
                <p><Link href="form"><a><EditIcon /> </a></Link> </p>

                </div>

            </div>
            <div className={styles.mainDiv}>
                <div className={styles.items}>
                <h3>Private Limited Company</h3>
                <p><Link href="form"><a><EditIcon /> </a></Link> </p>

                </div>

            </div>
        </div>
    )
}

export default Myservice



