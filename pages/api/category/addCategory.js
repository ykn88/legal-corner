import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async function (req, res) {
    const { category } = req.body
    try {
        if(!category)
          return res.status(422).json({error: "Please add category"}) 

        const value = await prisma.category.create({
            data: {
                name: category
            }
        }) 
        res.status(201).json(value)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "internal server error"})
    }
}
