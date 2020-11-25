import React from 'react'
// import Editor from '../components/backend/Editor'
import Form from '../components/backend/Form'
import Header from '../components/backend/Header'
import baseUrl from '../helpers/baseUrl'
// import MyEditor from '../components/backend/MyEditor'

const form = ({data}) => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form category={data}/>
            {/* <Editor /> */}
            {/* <MyEditor /> */}
        </div>
    )
}

export async function getStaticProps() {
    const categories = await fetch(`${baseUrl}/api/category/getCategory`)
    const data = await categories.json()
    return {
        props: {
           data
        }
    }
}

export default form
