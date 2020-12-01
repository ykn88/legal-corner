import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'


const Faq = ({productList}) => {

    if(typeof window!== undefined) {
        import('../../../helpers/index')
    }

    const Check = dynamic(() => 
        {return import('../../../helpers/index')},
        {ssr: false}
    )

    const [id, setId] = useState(0)
    const [question, setQuestion] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = ''
        let value
        if(question === '' || id === 0)
            console.log('Please add all fields')
        else {
            if(typeof window !== "undefined"){
                value = JSON.parse(window.localStorage.getItem('value'))
                value.blocks.forEach(block => body += block.text)   
            }
            const res = await fetch(`${baseUrl}/api/faq/createFaq`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    id,
                    body,
                    question
                })
            })
            const data = await res.json()
            console.log(data)
            setQuestion('')
        }   
    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>FAQ'S </h1>
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
                <form>
                    <div className={styles.input1}>
                        {/* <select onChange = {(e) => setId(parseInt(e.target.value))}>
                            <option value = '0'>Select Product</option>
                            {productList.map(list => (
                                <option key={list.id} value={list.id}>{list.name}</option>
                            ))}
                        </select> */}
                    </div>
                    <div className={styles.input1}>
                        <input className={styles.inp4} type="text" placeholder="Question" onChange = {(e) => setQuestion(e.target.value)} />
                    </div>
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

export default Faq
