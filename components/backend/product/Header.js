import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'

const Header = ({productList}) => {
    return (
        <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Header and Description</h1>
                    <div className={styles.ebutton}>
                        <p><EditIcon /></p>
                        <p>Switch</p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                            <input className={styles.inp4} type="text" placeholder="Header Title" />
                        </div>
                        <select>
                            <option value = '0'>Select a product</option>
                            {productList.map(list => (
                                <option value={list.id} key={list.id}>{list.name}</option>
                            ))}
                        </select>
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

export default Header
