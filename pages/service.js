import React from 'react'
import Header from '../components/backend/Header'
import Service from '../components/backend/service/Service'
import baseUrl from '../helpers/baseUrl'

const service = ({categorys}) => {
    return (
        <div>
            <Header />
            <br /><br /><br /><br />
            <Service categorys={categorys} />
        </div>
    )
}

export async function getServerSideProps(ctx) {

    // const {token1} = parseCookies(ctx)

    // const userData = {
    //     userId: 0,
    //     email: '',
    //     role: '',
    //     name: ''
    // }

    // if(!token1) {
    //     const {res} = ctx
    //     res.writeHead(302, {Location: '/about'})
    //     res.end()
    //  } else {
    //     const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
    //     userData.email = email
    //     userData.userId = userId,
    //     userData.role = role,
    //     userData.name = name
    //     if(role === 'user'){
    //         const {res} = ctx
    //         res.writeHead(302, {Location: '/about'})
    //         res.end()
    //     }
    //  }

    // const data2 = await fetch(`${baseUrl}/api/subCategory/getSubCategory`)
    // const productHeader = await data2.json()
    // const data3 = await fetch(`${baseUrl}/api/product/getProduct`)
    // const product = await data3.json()

    const data = await fetch(`${baseUrl}/api/category/getCategory`)
    const categorys = await data.json()


    return {
        props: {
           categorys
        }
    }
}


export default service
