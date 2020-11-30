const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
 
export default async function(req, res) {
    const {id, question, answers} = req.body

    if(!id || !question || !answers) 
       return res.status(422).json({error: "Please fill all fields"})
    else {
        try {
            const value = await prisma.faq.update({
                data: {
                    answers,
                    question,
                },
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
}