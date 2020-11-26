const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
   const data = await prisma.productHeader.findMany()
   console.log(data)
   res.status(200).json(data)
}