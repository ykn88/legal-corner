const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
    const { name, desc, productId } = req.body

    if(!name || !desc || !productId) {
      return res.status(422).json({error: "please add all fields"})
    }

    try {
        const document = await prisma.documents.create({
            data: {
                desc,
                name,
                product: {
                    connect: {
                        id: productId
                    }
                }
            }
        })
        console.log(document)
        res.status(201).json(document)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
}