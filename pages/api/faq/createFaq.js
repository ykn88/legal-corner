const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
 
export default async function(req, res) {
    const {id, question, body} = req.body

    if(!id || !question || !body) 
       return res.status(422).json({error: "Please fill all fields"})
    else {
        try {
            const value = await prisma.faq.create({
                data: {
                    answers: body,
                    question: question,
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