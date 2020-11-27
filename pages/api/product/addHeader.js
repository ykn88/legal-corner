const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
    const {title, body, id} = req.body

    try {
        if(!title || !body, !id) 
           return res.status(422).json({error: "Please add all fields"})
        else {
            const value = await prisma.productProfile.upsert({
                where: {
                    productId: id
                },
                update: {
                    headTitle: title,
                    headDesc: body
                },
                create: {
                    product: {
                        connect: {
                            id: id
                        }
                    },
                    headTitle: title,
                    headDesc: body
                }
            })
            res.status(200).json(value)
        }   
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
} 