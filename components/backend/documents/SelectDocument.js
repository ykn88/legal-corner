import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import styles from '../../../styles/backend/Form.module.scss'

const SelectDocument = ({documents}) => {
    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Document Requirement</h1>
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
                <select>
                    <option value='0'>Select Documnets</option>
                    {documents.map(list => (
                        <option key={list.id} value={list.id}>{list.name}</option>
                    ))}
                </select>
                <form>
                    <div className={styles.input1}>
                    <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                    </div>
                    <div className={styles.input2}>
                    <input className={styles.inp5} type="text"  placeholder="legal service Description" />
                    </div>
                    <div className={styles.button}>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SelectDocument
