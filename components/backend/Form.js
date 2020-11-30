import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Stack, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import baseUrl from '../../helpers/baseUrl'
import styles from '../../styles/backend/Form.module.scss'
import SelectDocument from './documents/selectDocument'
import AddVideo from './product/AddVideo'
import Body from './product/Body'
import CreateProduct from './product/CreateProduct'
import Faq from './product/Faq'
import Header from './product/Header'
import InvolvedSteps from './product/InvolvedSteps'

const Form = ({productHeader, product}) => {
    
    const [subCatList, setSubCatList] = useState(productHeader || [])
    const [productList, setProductList] = useState(product || [])
      

    return (
        <div>
            {/* <CreateProduct subCatList={subCatList} setProductList={setProductList}/> */}
            <Header />
            <Body productList={productList}/>
            <AddVideo productList={productList}/>
            <SelectDocument productList={productList}/>
            <InvolvedSteps productList={productList}/>
            <Faq productList={productList}/>
        </div>
    )
}



export default Form
