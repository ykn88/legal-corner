import React from 'react'
import SelectDocument from '../../components/backend/documents/selectDocument'
import Form from '../../components/backend/Form'
import Header from '../../components/backend/Header'
import AddVideo from '../../components/backend/product/AddVideo'
import Body from '../../components/backend/product/Body'
import Faq from '../../components/backend/product/Faq'
import InvolvedSteps from '../../components/backend/product/InvolvedSteps'
import baseUrl from '../../helpers/baseUrl'
import Headers from '../../components/backend/product/Headers'

const edit = ({singleProduct}) => {
    return (
        <div>
            {/* <h1>{singleProduct.name}</h1> */}
            <Header />
            <br/><br/><br/><br/><br/>
            <Headers singleProduct={singleProduct}  />
            <Body singleProduct={singleProduct}/>
            <AddVideo singleProduct={singleProduct} />
            <SelectDocument />
            <InvolvedSteps />
            <Faq />

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
