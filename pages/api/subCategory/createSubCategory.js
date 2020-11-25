const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function (req, res) {
    const {subCat, selectCat} = req.body
    try {
        if(!subCat || !selectCat)
          return res.status(422).json({error: "Please add category"})
        const value = await prisma.productHeader.create({
            data: {
                category: {
                    connect: {
                        id: selectCat
                    }
                },
                name: subCat
            }
        })  
        res.status(201).json(value)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "internal server error"})
    }
}