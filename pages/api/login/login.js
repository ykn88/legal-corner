const { PrismaClient } = require("@prisma/client");
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function(req, res) {
    const {email, password} = req.body

    if(!email || !password)
      return res.status(422).json({error: "Please fill all details"})

    else{
        try {
            const value = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if(!value) 
               return res.status(404).json({error: "Email or password doesn't match"})
            const doMatch = value.password === password
            if(doMatch) {
                const logCookie =  jwt.sign({userId: value.id, name: value.name, email: value.email, role: value.role}, process.env.JWT_SECRET, {
                    expiresIn: "7d"
                })
                const {name, email, role, id} = value
                res.status(201).json({logCookie, value: {name, email, role, id}})
            }   
            else{ 
                return res.status(401).json({error: "Email or Password doesn't match"})
            }
            
        } catch (error) {
            console.log(error)
            res.status(500).json({error: "Internal Server Error"})
        }
    }  



}