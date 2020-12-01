import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import styles from '../../../styles/backend/Form.module.scss'
import baseUrl from '../../../helpers/baseUrl'


const SelectDocument = ({singleProduct}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [docList, setDocList] = useState(singleProduct.document || [])
    const handleChange = async (e) => {
        e.preventDefault()
        const value = await fetch(`${baseUrl}/api/documents/addDocument`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                desc,
                productId: singleProduct.id
            })
        })
        const data = await value.json()
        console.log(data)
        setDocList(prevData => [
            ...prevData, data
        ])
        setName('')
        setDesc('')
    }

    const handleDelete = async (id) => {

        const res = await fetch(`${baseUrl}/api/documents/deleteDocuments`,{
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
            const list = docList.filter(list => list.id !== data.id)
            console.log(list)
            setDocList(list)
        }

    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Documents Required</h1>
                <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch</p>
                </div>
            </div>

            {docList.map(list => (
                <div key={list.id} className={styles.card}>
                    <div className={styles.card1}>
                        <h1>{list?.name}</h1>
                        <div className={styles.card2}>
                            <p>{list?.desc}</p>
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
                        <input className={styles.inp4} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Document Title" />
                    </div>
                    <div className={styles.input1}>
                        <textarea className={styles.inp4} value={desc} onChange={(e) => setDesc(e.target.value)} rows="4" cols="50" placeholder="Document Description" />
                    </div>
                    
                    <div className={styles.button}>
                        <button onClick={handleChange}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SelectDocument
