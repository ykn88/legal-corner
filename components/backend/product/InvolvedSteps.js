import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import RichEditorExample from '../../../helpers/index'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'

const InvolvedSteps = ({singleProduct}) => {

    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const [id, setId] = useState('')
    const [steps, setSteps] = useState(singleProduct?.steps || [])

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
        if(to === '' || id === 0 || from === '')
            console.log('Please add all fields')
        else {
            if(typeof window !== "undefined"){
                value = JSON.parse(window.localStorage.getItem('value'))
                value.blocks.forEach(block => body += block.text)   
            }
            console.log(to, from, body)
            const res = await fetch(`${baseUrl}/api/steps/addSteps`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    id: singleProduct.id,
                    to,
                    body,
                    from
                })
            })
            const data = await res.json()
            console.log(data)
            if(data.error) {
                console.log(data.error)
                alert(data.error)
            }
            else {
                setTo('')
                setFrom('')
                setSteps(prevData => [
                    ...prevData, data
                ])
            }
        }   
    }

    const handleDelete = async (id) => {

        const res = await fetch(`${baseUrl}/api/steps/deleteStep`,{
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
            const list = steps.filter(list => list.id !== data.id)
            console.log(list)
            setSteps(list)
        }

    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Involved Steps </h1>
                <div className={styles.ebutton}>
                <p>Switch</p>
                </div>
            </div>
            {steps.map(list => (
                <div key={list.id} className={styles.card}>
                    <div className={styles.card1}>
                        <h1>From Day: {list?.fromDay}</h1>
                        <h1>Till Day: {list?.toDay}</h1>
                        <div className={styles.card2}>
                            <p>{list?.description}</p>
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
                        <input className={styles.inp50} type="text" placeholder="From Day" onChange = {(e) => setFrom(e.target.value)}/>
                        <input className={styles.inp50} type="text" placeholder="Till Day" onChange = {(e) => setTo(e.target.value)}/>
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

export default InvolvedSteps
