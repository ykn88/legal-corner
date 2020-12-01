import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import styles from '../../../styles/backend/Form.module.scss'
import dynamic from 'next/dynamic'
import baseUrl from '../../../helpers/baseUrl'
import { useRouter } from 'next/router'


const Service = ({categorys, sub}) => {
    const [filterList, setFilterList] = useState(sub)
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const router = useRouter()

    const handleChange = (e) => {
        if(e.target.value === '0')
           setFilterList(sub)
        else {
            const list = sub.filter(list => list.categoryId === parseInt(e.target.value))
            console.log(list)
            setFilterList(list)
        }   
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(id === '0' || name === '' || price === 0) {
            alert('Please insert all fields')
        }
        else {
            const value = await fetch(`${baseUrl}/api/product/createProduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productHeaderId: parseInt(id),
                    name,
                    price
                })
            })
            const data = await value.json()
            if(data.error) {
                console.log(error)
                alert('Product creation failed')
            }
            else {
                console.log(data)
                router.push(`/edit/${data.id}`)
            }
        }
    }

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
                        <input className={styles.inp4} type="text" placeholder="Enter Service Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={styles.selectbox}>
                        <select onChange = {(e) => handleChange(e)}>
                            <option value = '0'>Select Category</option>
                            {categorys.map((cat=>
                                <option key={cat.id} value ={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        <select onChange = {(e) => setId(parseInt(e.target.value))}>
                            <option value = '0'>Select Sub Category</option>
                            {filterList.map(list => (
                                <option key={list.id} value = {list.id}>{list.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.input1}>
                        <input className={styles.inp4} placeholder='Enter Service Fee' onChange={(e) => setPrice(parseFloat(e.target.value))}/>
                    </div>
                    <div className={styles.button}>
                        <button onClick = {handleSubmit}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Service
