import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    const session = await getSession({req})
    let user = {}
    if(session) {
     user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        }) 
    }
    console.log('myUser: ', user) 
    res.json(user)
}