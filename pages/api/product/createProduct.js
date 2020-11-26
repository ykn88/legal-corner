const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
    const {productHeaderId, name, price} = req.body

    try {
        if(!productHeaderId || !name || !price)
           return res.status(422).json({error: "Please add a header id"})
        const value = await prisma.product.create({
            data: {
                productHead:  {
                    connect: {
                        id: productHeaderId
                    }
                },
                name: name,
                price: parseFloat(price)
            }
        })
        
        res.status(201).json(value)   
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
}