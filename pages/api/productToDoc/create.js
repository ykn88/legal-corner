const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function (req, res) {
    const { productId, documentId } = req.body

    if(!productId || !documentId) 
        return res.status(422).json({error: "Add all fields"})

    try {
        const value = await prisma.productToDocuments.create({
            data: {
                document: {
                    connect: {
                        id: documentId
                    }
                },
                product: {
                    connect: {
                        id: productId
                    }
                }
            },
            include: {
                document: true
            }
        })
        res.status(201).json(value)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }    
        
    
}