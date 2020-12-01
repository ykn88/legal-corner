import React, { useEffect } from 'react'
import About from '../components/About'
import Slider from '../components/Slider'
import Home from '../components/Home'
import Intro from '../components/Intro'
import Document from '../components/Document'
import SliderTwo from '../components/SliderTwo'
import SliderBig from '../components/SliderBig'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'
import useRole from '../hooks/useRole'
import { parseCookies } from 'nookies'
import jwt from 'jsonwebtoken'
import baseUrl from '../helpers/baseUrl'

const about = () => {
    
    return (
        <div>
           About Page
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

    // if(token1) {
    //     const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
    //     userData.email = email
    //     userData.userId = userId,
    //     userData.role = role,
    //     userData.name = name
    // }

//     const calye = await fetch(`${baseUrl}/api/category/getCategory`)
//     const category = await calye.json()
    
//     console.log(userData)
//     return {
//         props: {
//             userData, category
//         }
//     }
// }

export default about
