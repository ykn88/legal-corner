const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function (req, res) {
    const {pid} = req.query
    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(pid)
        },
        include: {
            document: true,
            faq: true,
            steps: true
        }
    })
    console.log(product)
    res.status(200).json(product)
}