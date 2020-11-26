import { useSession } from 'next-auth/client'
import React from 'react'
// import Editor from '../components/backend/Editor'
import Form from '../components/backend/Form'
import Header from '../components/backend/Header'
import baseUrl from '../helpers/baseUrl'
// import MyEditor from '../components/backend/MyEditor'

const form = ({data, productHeader, product, documents}) => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form category={data} productHeader={productHeader} product={product} documents={documents}/>
            {/* <Editor /> */}
            {/* <MyEditor /> */}
        </div>
    )
}

export async function getStaticProps() {
    const categories = await fetch(`${baseUrl}/api/category/getCategory`)
    const data = await categories.json()
    const data2 = await fetch(`${baseUrl}/api/subCategory/getSubCategory`)
    const productHeader = await data2.json()
    const data3 = await fetch(`${baseUrl}/api/product/getProduct`)
    const product = await data3.json()
    const data4 = await fetch(`${baseUrl}/api/documents/getDocuments`)
    const documents = await data4.json()
    return {
        props: {
           data, productHeader, product, documents
        }
    }
}

export default form
