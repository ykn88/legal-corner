import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import styles from '../../../styles/backend/Form.module.scss'
import baseUrl from '../../../helpers/baseUrl'


const SelectDocument = ({productList}) => {
    const [docArray, setDocArray] = useState([])
    const [product, setProduct] = useState(0)
    const [docs, setDocs] = useState(0)

    const handleChange = (e) => {
        const number = parseInt(e.target.value)
        setProduct(number)
        const list = productList?.filter(list => list.id === number) || []
        const docList = list[0]?.ptd || []
        setDocArray(docList)
    }

    const newList = (data) => {
        setDocArray(prevState => [
            ...prevState, data
        ])
    }

    const reduceList = (data) => {
        const value = docArray.filter(list => list.documentId !== data.documentId)
        setDocArray(value)
    }

    const deleteProduct = async (value) => {
        console.log(value)
        const res = await fetch(`${baseUrl}/api/productToDoc/deleteDocument`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                documentId: value.documentId,
                productId: value.productId
            })
        })
        const data = await res.json()
        reduceList(data)
    }

    const handleSubmit = async () => {
        if(product === 0 || docs === 0)
           alert('Please enter all fields')
        else {
            const res = await fetch(`${baseUrl}/api/productToDoc/create`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    productId: product,
                    documentId: docs 
                })
            })
            const data = await res.json()
            newList(data)
        }   
    }

    return (
        <div className={styles.first}>
            <div className={styles.head}>
                <h1>Document Requirement</h1>
                <div className={styles.ebutton}>
                <p>Switch</p>
                </div>
            </div>
            
            {docArray.map(list => (
                <div key = {list?.document?.id} className={styles.card}>
                    <div className={styles.card1}>
                            <h1>{list?.document?.name}</h1>
                            <div className={styles.card2}>
                                <p>{list?.document?.desc}</p>
                                <div className={styles.delete}>
                                    <p onClick = {() => deleteProduct(list)} className={styles.d}> <DeleteIcon /> </p>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
            <div className={styles.input}>
                <select onChange = {(e) => handleChange(e)}>
                    <option value = '0'>Select Product</option>
                    {productList?.map(list => (
                        <option key={list?.id} value={list?.id}>{list?.name}</option>
                    ))}
                </select>
                
                <div className={styles.button}>
                    <button onClick = {handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default SelectDocument
