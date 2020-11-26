import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import styles from '../../../styles/backend/Form.module.scss'
import baseUrl from '../../../helpers/baseUrl'


const CreateProduct = ({subCatList, setProductList}) => {
    const [selectSubCat, setSelectSubCat] = useState(0)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const updateProductList = (data) => {
        setProductList(prevState => [
            ...prevState, data
        ])
    }

    const postProduct = async (e) => {
        e.preventDefault()
        if(selectSubCat === 0 || name === '' || price === 0)
           alert('Please enter all fields')
        else {
            const res = await fetch(`${baseUrl}/api/product/createProduct`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productHeaderId: selectSubCat,
                    name,
                    price
                })
            })
            const data = await res.json()
            console.log(data)
            setPrice(0)
            setName('')
            updateProductList(data)
        }   
    }

    return (
        <div className={styles.first}>
        <div className={styles.head}>
            <h1>Add Product</h1>
            <div className={styles.ebutton}>
            <p><EditIcon /></p>
            <p>Switch </p>
            </div>
        </div>
        <div className={styles.input}>
            <form>
                <div className={styles.input1}>
                    <label>
                        Product Name: 
                    </label>
                    <input className={styles.inp1} type="text" value={name} onChange = {(e) => setName(e.target.value)} />
                    <label>
                        Price: 
                    </label>
                    <input className={styles.inp2} type="text"  value={price} onChange = {(e) => setPrice(e.target.value)} />
                </div>
                <select onChange = {(e) => setSelectSubCat(parseInt(e.target.value))}>
                    <option value='0'>Select Sub Category</option>
                    {subCatList.map(list => (
                        <option key = {list?.id} value = {list?.id}>{list?.name}</option>
                    ))}
                </select>
                
                <div className={styles.button}>
                    <button onClick = {postProduct}>Save</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default CreateProduct
