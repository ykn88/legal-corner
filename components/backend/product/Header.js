import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'
import Next from '../../../helpers/NewEditor'


const Header = () => {

    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)

    if(typeof window!== undefined) {
        import('../../../helpers/index')
    }

    const Check = dynamic(() => 
        {return import('../../../helpers/index')},
        {ssr: true}
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = ''
        let value
        if(title === '' || id === 0 )
            console.log('Please add all fields')
        else {
            if(typeof window !== "undefined"){
                value = JSON.parse(window.localStorage.getItem('value'))
                value.blocks.forEach(block => body += block.text)   
            }
            const res = await fetch(`${baseUrl}/api/product/addHeader`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    id,
                    title,
                    body
                })
            })
            
            console.log(res)
            setTitle('')
        }   
    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Short Descritpion</h1>
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

export default Header
