import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'


const AddVideo = ({productList}) => {
    return (
        <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Video & Description</h1>
                    <div className={styles.ebutton}>
                        <p><EditIcon /></p>
                        <p>Switch</p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                            <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <select>
                            <option value = '0'>Select a product</option>
                            {productList.map(list => (
                                <option value={list.id} key={list.id}>{list.name}</option>
                            ))}
                        </select>
                        <div className={styles.input2}>
                            <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default AddVideo
