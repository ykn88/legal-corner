import { parseCookies } from 'nookies'
import React from 'react'
import Header from '../components/backend/Header'
import Service from '../components/backend/service/Service'
import baseUrl from '../helpers/baseUrl'
import jwt from 'jsonwebtoken'

const service = ({categorys, sub, userData}) => {
    return (
        <div>
            <Header userData={userData}/>
            <br /><br /><br /><br />
            <Service categorys={categorys} sub={sub}/>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const {token1} = parseCookies(ctx)

    const userData = {
        userId: 0,
        email: '',
        role: '',
        name: ''
    }

    if(!token1) {
        const {res} = ctx
        res.writeHead(302, {Location: '/unauthorized'})
        res.end()
    } else {
        const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
        userData.email = email
        userData.userId = userId,
        userData.role = role,
        userData.name = name
        console.log(userData)
        if(role === 'user' || role === ''){
            const {res} = ctx
            res.writeHead(302, {Location: '/unauthorized'})
            res.end()
        }
    }
    const data = await fetch(`${baseUrl}/api/category/getCategory`)
    const categorys = await data.json()
    const data2 = await fetch(`${baseUrl}/api/subCategory/getSubCategory`)
    const sub = await data2.json()

    return {
        props: {
           categorys, sub, userData
        }
    }
}


export default service
