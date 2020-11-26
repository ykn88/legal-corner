import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Stack, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import baseUrl from '../../helpers/baseUrl'
import styles from '../../styles/backend/Form.module.scss'
import SelectDocument from './documents/selectDocument'
import AddVideo from './product/AddVideo'
import CreateProduct from './product/CreateProduct'
import Faq from './product/Faq'
import Header from './product/Header'
import InvolvedSteps from './product/InvolvedSteps'

const Form = ({category, productHeader, product, documents}) => {

    const [cat, setCat] = useState('')
    const [subCat, setSubCat] = useState('')
    const [selectCat, setSelectCat] = useState(0)
    const [caltList, setCatList] = useState(category)
    const [subCatList, setSubCatList] = useState(productHeader)
    const [productList, setProductList] = useState(product)

    const updateCatList = (data) => {
        setCatList(prevState => [
            ...prevState, data
        ])
    }

    const updateSubCatList = (data) => {
        setSubCatList(prevState => [
            ...prevState, data
        ])
        console.log(subCatList)
    } 
    
    const postCat = async (e) => {
        e.preventDefault()
        if(cat === '') {
            alert('insert a category')
        }
        else {
            const category = cat
            const res = await fetch(`${baseUrl}/api/category/addCategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category
                })
            })
            const data = await res.json()
            setCat('')
            console.log(data)
            updateCatList(data)
        }
    }

    const postSubCat = async (e) => {
        e.preventDefault()
        console.log(subCat, selectCat)
        if(subCat === '' || selectCat === 0)
           alert('fields missing')
        else {
            const res = await fetch(`${baseUrl}/api/subCategory/createSubCategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subCat,
                    selectCat
                })
            })
            const data = await res.json()
            updateSubCatList(data)
            setSubCat('')
            console.log(data)
        }   
    }

    return (
        <div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Add Main Category</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch </p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                           <input className={styles.inp1} value = {cat} type="text" onChange = {(e) => setCat(e.target.value)}/>
                        </div>
                        
                        <div className={styles.button}>
                            <button onClick = {postCat}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Add Sub Category</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch </p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                           <input className={styles.inp1} value = {subCat} onChange = {(e) => setSubCat(e.target.value)} type="text" />
                        </div>

                        <select onChange = {(e) => setSelectCat(parseInt(e.target.value))}>
                            <option value='0'>Select a category</option>
                            {caltList.map(data => (
                                <option key = {data?.id} value = {data?.id}>{data?.name}</option>
                            ))}
                        </select>
                        
                        <div className={styles.button}>
                            <button onClick = {postSubCat}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <CreateProduct subCatList={subCatList} setProductList={setProductList}/>
            <Header productList={productList}/>
            <AddVideo productList={productList}/>
            <SelectDocument documents={documents} productList={productList}/>
            <InvolvedSteps productList={productList}/>
            <Faq productList={productList}/>
            
        </div>
    )
}



export default Form
