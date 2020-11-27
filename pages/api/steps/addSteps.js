const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
 
export default async function(req, res) {
    const {id, to, from, body} = req.body

    if(!id || !to || !from || !body) 
       return res.status(422).json({error: "Please fill all fields"})
    else {
        try {
            const value = await prisma.steps.create({
                data: {
                    description: body,
                    fromDay: parseInt(from),
                    toDay: parseInt(to),
                    product: {
                        connect: {
                            id: id
                        }
                    }
                }
            })
            res.status(200).json(value)
        } catch (error) {
            console.log(error)
            res.status(500).json({error: "Internal Server Error"})          
        }
    }   
}