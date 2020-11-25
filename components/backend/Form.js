import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Stack, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import baseUrl from '../../helpers/baseUrl'
import styles from '../../styles/backend/Form.module.scss'

const Form = ({category}) => {

    const [cat, setCat] = useState('')
    const [subCat, setSubCat] = useState('')
    const [selectCat, setSelectCat] = useState(0)
    const [caltList, setCatList] = useState(category)

    const updateCatList = (data) => {
        setCatList(prevState => [
            ...prevState, data
        ])
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
            console.log(typeof(selectCat) === 'number')
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
            setSubCat('')
            console.log(data)
            // window.location.reload()
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
                                <option key = {data.id} value = {data.id}>{data.name}</option>
                            ))}
                        </select>
                        
                        <div className={styles.button}>
                            <button onClick = {postSubCat}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
           
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Hero Section</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch </p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp1} type="text" placeholder="legal Service Name" />
                        <input className={styles.inp2} type="text"  placeholder="Service Fee" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Short Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Video & Description</h1>
                    <div className={styles.ebutton}>
                    <p><EditIcon /></p>
                    <p>Switch</p>
                    </div>
                </div>
                <div className={styles.input}>
                    <form>
                        <div className={styles.input1}>
                        <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Document Requirment</h1>
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
                        <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp5} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={styles.first}>
                <div className={styles.head}>
                    <h1>Involved Steps </h1>
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
                        <input className={styles.inp50} type="text" placeholder="From Day" />
                        <input className={styles.inp50} type="text" placeholder="To Day" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
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
                        <input className={styles.inp4} type="text" placeholder="From Day" />
                        </div>
                        <div className={styles.input2}>
                        <input className={styles.inp3} type="text"  placeholder="legal service Description" />
                        </div>
                        <div className={styles.button}>
                            <button>Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}



export default Form
