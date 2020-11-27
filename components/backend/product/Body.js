import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'

const Body = ({productList}) => {

    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)

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
        if(title === '' || id === 0 )
            console.log('Please add all fields')
        else {
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
                    id,
                    title,
                    body
                })
            })
            const data = await res.json()
            console.log(data)
            setTitle('')
        }   
    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Body and Description</h1>
                <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch</p>
                </div>
            </div>
            <div className={styles.input}>
                <form>
                    <div className={styles.input1}>
                        <input onChange = {(e) => setTitle(e.target.value)} className={styles.inp4} type="text" placeholder="Body Title" />
                    </div>
                    <select onChange = {(e) => setId(parseInt(e.target.value))}>
                        <option value = '0'>Select a product</option>
                        {productList.map(list => (
                            <option value={list.id} key={list.id}>{list.name}</option>
                        ))}
                    </select>
                    <br />
                    <br />
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
