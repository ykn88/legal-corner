import React from 'react'
import baseUrl from '../../helpers/baseUrl'

const edit = ({singleProduct}) => {
    return (
        <div>
            <h1>{singleProduct.name}</h1>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const pid = parseInt(ctx.params.id)
    const singleProduct = await (await fetch(`${baseUrl}/api/product/${pid}`)).json()
    console.log(singleProduct)

    return {
        props: {
            singleProduct
        }
    }
}

export default edit
