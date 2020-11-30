const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function (req, res) {
    const {id} = req.body
    try {
        if(!id)
          return res.status(422).json({error: "Please add category"})
        const value = await prisma.productHeader.delete({
            where: {
                id: id
            }
        })  
        res.status(201).json(value)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
}