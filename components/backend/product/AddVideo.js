import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import {EditorState, Editor, convertFromRaw, convertToRaw} from 'draft-js'
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import RichEditorExample from '../../../helpers';
import baseUrl from '../../../helpers/baseUrl';


const AddVideo = ({singleProduct}) => {

    const [videoUrl, setVideoUrl]= useState("")

    // const handleEditorChange = (value) => {
    //     console.log(value)
    // }
    // if(typeof window!== undefined) {
    //     import('../../../helpers/index')
    // }
    // const Check = dynamic(() => 
    //     {return import('../../../helpers/index')},
    //     {ssr: false}
    // )

    // const save = (value) => {
    //     console.log(value)
    // }

    // const test = (editorState) => {
        
    //     const value = editorState.getCurrentContent()
    //     console.log(value.getPlainText())
    // }

    const handleSubmit = async (e) => {
        alert("saved / updated")
        e.preventDefault()
        // let videoUrl = ''
        let body = ''
        let value
        if(videoUrl === '' || singleProduct.id === 0 )
            console.log('Please add all fields')
        else {
            if(typeof window !== "undefined"){
                value = JSON.parse(window.localStorage.getItem('value'))
                value.blocks.forEach(block => body += block.text)   
            }
            const res = await fetch(`${baseUrl}/api/product/updateProductVideoUrl`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    id : singleProduct.id,
                    videoUrl,
                    // body
                })
            })
            
            console.log(res)
            setVideoUrl('')
        }   
    }

    return (
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
                            <input className={styles.inp4} type="text" placeholder="YouTube Video Link"
                            onChange={e => setVideoUrl(e.target.value)}
                             value={singleProduct?.videoUrl}
                             />
                        </div>
                        {/* <select>
                            <option value = '0'>Select a product</option>
                            {productList.map(list => (
                                <option value={list.id} key={list.id}>{list.name}</option>
                            ))}
                        </select> */}
                        {/* <div className={styles.input2}>
                            <Check />
                        </div> */}
                        <div className={styles.button}>
                            {/* <button onClick={handleEditorChange}>Save</button> */}
                            <button onClick={handleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default AddVideo
