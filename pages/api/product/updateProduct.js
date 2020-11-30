const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function (req, res) {
    const {id, long, short, videoUrl} = req.body

    if(!id) {
        return res.status(422).json({error: "Please add all fields"})
    }

    try {
        const value = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                long: long,
                short: short,
                videoUrl: videoUrl
            }
        })
        console.log(value)
        res.status(201).json(value)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
}