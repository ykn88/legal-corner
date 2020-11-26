const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

export default async function(req, res) {
    const value = await prisma.documents.findMany()
    res.status(200).json(value)
} 