import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'


const Faq = ({singleProduct}) => {

    if(typeof window!== undefined) {
        import('../../../helpers/index')
    }

    const Check = dynamic(() => 
        {return import('../../../helpers/index')},
        {ssr: false}
    )

    const [id, setId] = useState(singleProduct.id)
    const [question, setQuestion] = useState('')
    const [blogs, setBlogs] = useState(singleProduct.faq || [])

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
            if(data.error) {
                console.log(data.error)
                alert(data.error)
            }
            else {
                console.log(data)
                setQuestion('')
                setBlogs(prevData => [
                    ...prevData, data
                ])
            }
        }   
    }

    const handleDelete = async (id) => {

        const res = await fetch(`${baseUrl}/api/faq/deleteFaq`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id
            })
        })

        const data = await res.json()
        if(data.error) {
            console.log(data.error)
            alert(data.error)
        }
        else {
            console.log(data)
            const list = blogs.filter(list => list.id !== data.id)
            console.log(list)
            setBlogs(list)
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
            {blogs.map(list => (
                <div key={list.id} className={styles.card}>
                    <div className={styles.card1}>
                        <h1>{list?.question}</h1>
                        <div className={styles.card2}>
                            <p>{list?.answers}</p>
                            <div className={styles.delete}>
                                <p onClick={() => handleDelete(list.id)} className={styles.d}> <DeleteIcon /> </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.input}>
                <form>
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
