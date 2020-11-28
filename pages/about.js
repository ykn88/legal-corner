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

const about = ({userData}) => {
    console.log(userData)
    let setUser
    const {user} = useRole()
    setUser = user
    return (
        <div>

        <NavBar />
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        {/* <Nav /> */}
            <Home userData = {userData}/>
            <br />
            {/* <hr /> */}
            <Slider />
            {/* <hr /> */}
            <Intro />
            <Document />
            <About />
            {/* <SliderTwo /> */}
            <SliderBig />
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
    if(token1) {
        const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
        userData.email = email
        userData.userId = userId,
        userData.role = role,
        userData.name = name
    }
    
    console.log(userData)
    return {
        props: {
            userData
        }
    }
}

export default about
