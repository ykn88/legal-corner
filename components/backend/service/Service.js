import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import styles from '../../../styles/backend/Form.module.scss'
import dynamic from 'next/dynamic'


const Service = ({categorys}) => {
    

    return (
        <div className={styles.first}>
        <div className={styles.head}>
            <h1>Add Service Name</h1>
            <div className={styles.ebutton}>
                <p><EditIcon /></p>
                <p>Switch</p>
            </div>
        </div>
        <div className={styles.input}>
            <form>
                <div className={styles.input1}>
                    <input className={styles.inp4} type="text" placeholder="Enter Service Name" />
                </div>
               
               <div className={styles.selectbox}>

               <select>
                    <option value = '0'>Select Category</option>
                    {categorys.map((cat=>
                        <option value ={cat.id}>{cat.name}</option>
                    
                    ))}
                    
                </select>
                <select>
                    <option value = '0'>Select Sub Category</option>
                    
                    <option value = "1">Sub Category 1</option>
                    <option value = "1">Sub Category 1</option>
                </select>
               </div>

                <div className={styles.button}>
                    <button>Next</button>
                </div>
            </form>
        </div>
    </div>

    )
}

export default Service
