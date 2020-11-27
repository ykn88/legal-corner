import styles from '../../../styles/backend/Form.module.scss'
import { EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import {EditorState, Editor, convertFromRaw, convertToRaw} from 'draft-js'
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import RichEditorExample from '../../../helpers';


const AddVideo = ({productList}) => {

    const handleEditorChange = (value) => {
        console.log(value)
    }
    if(typeof window!== undefined) {
        import('../../../helpers/index')
    }
    const Check = dynamic(() => 
        {return import('../../../helpers/index')},
        {ssr: false}
    )

    const save = (value) => {
        console.log(value)
    }

    const test = (editorState) => {
        
        const value = editorState.getCurrentContent()
        console.log(value.getPlainText())
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
                            <input className={styles.inp4} type="text" placeholder="YouTube Video Link" />
                        </div>
                        <select>
                            <option value = '0'>Select a product</option>
                            {productList.map(list => (
                                <option value={list.id} key={list.id}>{list.name}</option>
                            ))}
                        </select>
                        {/* <div className={styles.input2}>
                            <Check />
                        </div> */}
                        <div className={styles.button}>
                            <button onClick={handleEditorChange}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default AddVideo
