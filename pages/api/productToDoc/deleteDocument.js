const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
    const {documentId, productId} = req.body
    try {
        const value = await prisma.productToDocuments.delete({
            where: {
                documentId_productId: {
                    documentId: documentId,
                    productId: productId
                }
            },
            include: {
                document: true
            }
        })
        console.log(value)
        res.status(200).json(value)
    } catch (error) {
        console.log(error)
    }
}