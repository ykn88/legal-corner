import React, { useEffect } from 'react'
import About from '../../components/About'
import Slider from '../../components/Slider'
import Home from '../../components/Home'
import Intro from '../../components/Intro'
import Document from '../../components/Document'
import SliderTwo from '../../components/SliderTwo'
import SliderBig from '../../components/SliderBig'
import NavBar from '../../components/NavBar'
import Nav from '../../components/Nav'
import useRole from '../../hooks/useRole'
import { parseCookies } from 'nookies'
import jwt from 'jsonwebtoken'
import baseUrl from '../../helpers/baseUrl'

const product = ({singleProduct, category,subCategory}) => {
    return (
        <div>
            {/* <Nav /> */}
            <NavBar category={category} subCategory={subCategory}/>
            <Home singleProduct={singleProduct}/>
            <br />
            <hr />
            <Slider />
            <hr />
            <Intro singleProduct={singleProduct}/>
            <Document singleProduct = {singleProduct}/>
            <About singleProduct = {singleProduct}/>
            {/* <SliderTwo /> */}
            <SliderBig singleProduct = {singleProduct}/>
        </div>
    )
}


export async function getServerSideProps(ctx) {
  
    const pid = parseInt(ctx.params.id)
    const singleProduct = await (await fetch(`${baseUrl}/api/product/${pid}`)).json()
    console.log(singleProduct)
    const category = await (await fetch(`${baseUrl}/api/category/getCategory`)).json()
    const subCategory = await (await fetch(`${baseUrl}/api/subCategory/getSubCategory`)).json()
    
    return {
        props: {
            singleProduct,category,subCategory
        }
    }
}



export default product
