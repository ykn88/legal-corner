import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'

const Body = () => {

    if(typeof window!== undefined) {
        import('../../../helpers/index')
    }

    const Check = dynamic(() => 
        {return import('../../../helpers/index')},
        {ssr: false}
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = ''
        let value
       
        if(typeof window !== "undefined"){
            value = JSON.parse(window.localStorage.getItem('value'))
            value.blocks.forEach(block => body += block.text)   
        }
        const res = await fetch(`${baseUrl}/api/product/addBody`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                body
            })
        })
        const data = await res.json()
        console.log(data)
        setTitle('')
    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Long Description</h1>
                <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch</p>
                </div>
            </div>
            <div className={styles.input}>
                <form>
                    <div className={styles.input2}>
                        <Check />
                    </div>
                    <div className={styles.button}>
                        <button onClick = {handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Body
