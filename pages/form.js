import { useSession } from 'next-auth/client'
import { parseCookies } from 'nookies'
import React from 'react'
// import Editor from '../components/backend/Editor'
import Form from '../components/backend/Form'
import Header from '../components/backend/Header'
import baseUrl from '../helpers/baseUrl'
import jwt from 'jsonwebtoken'
// import MyEditor from '../components/backend/MyEditor'

const form = () => {
    const productHeader = []
    const product = []
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Form productHeader={productHeader} product={product} />
            {/* <Editor /> */}
            {/* <MyEditor /> */}
        </div>
    )
}

// export async function getServerSideProps(ctx) {

//     const {token1} = parseCookies(ctx)

//     const userData = {
//         userId: 0,
//         email: '',
//         role: '',
//         name: ''
//     }

//     // if(!token1) {
//     //     const {res} = ctx
//     //     res.writeHead(302, {Location: '/about'})
//     //     res.end()
//     //  } else {
//     //     const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
//     //     userData.email = email
//     //     userData.userId = userId,
//     //     userData.role = role,
//     //     userData.name = name
//     //     if(role === 'user'){
//     //         const {res} = ctx
//     //         res.writeHead(302, {Location: '/about'})
//     //         res.end()
//     //     }
//     //  }

//     const data2 = await fetch(`${baseUrl}/api/subCategory/getSubCategory`)
//     const productHeader = await data2.json()
//     const data3 = await fetch(`${baseUrl}/api/product/getProduct`)
//     const product = await data3.json()

//     return {
//         props: {
//            productHeader, product
//         }
//     }
// }

export default form
