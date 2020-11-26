const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
   const data = await prisma.product.findMany({
      include:{
         profile: true,
         ptd: {
            include: {
               document: true
            }
         },
         faq: true,
         steps: true
      }
   })
   console.log(data)
   res.status(200).json(data)
}