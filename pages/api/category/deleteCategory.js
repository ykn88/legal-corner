import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async function (req, res) {
    const { id } = req.body
    try {
        if(!id)
          return res.status(422).json({error: "Please mention id"}) 

        const value = await prisma.category.delete({
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
