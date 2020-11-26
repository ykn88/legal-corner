import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'

const InvolvedSteps = ({productList}) => {
    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Involved Steps </h1>
                <div className={styles.ebutton}>
                <p>Switch</p>
                </div>
            </div>
            <div className={styles.card}>
            <div className={styles.card1}>
                <h1>1) Pan Card</h1>
                <div className={styles.card2}>
                    <p>Description</p>
                    <div className={styles.delete}>
                        <p className={styles.e}><EditIcon /></p>
                        <p className={styles.d}> <DeleteIcon /> </p>
                    </div>
                </div>
            </div>

            </div>
            <div className={styles.card}>
                <div className={styles.card1}>
                    <h1>1) Pan Card</h1>
                    <div className={styles.card2}>
                        <p>Description</p>
                        <div className={styles.delete}>
                            <p className={styles.e}><EditIcon /></p>
                            <p className={styles.d}> <DeleteIcon /> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.input}>
                <select onChange = {(e) => handleChange(e)}>
                    <option value = '0'>Select Product</option>
                    {productList.map(list => (
                        <option key={list.id} value={list.id}>{list.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.input}>    
                <form>
                    <div className={styles.input1}>
                        <input className={styles.inp50} type="text" placeholder="From Day" />
                        <input className={styles.inp50} type="text" placeholder="To Day" />
                    </div>
                    <div className={styles.input2}>
                        <RichEditorExample />
                    </div>
                    <div className={styles.button}>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InvolvedSteps
