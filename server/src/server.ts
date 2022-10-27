import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(cors())

const prisma = new PrismaClient({
  log:['query']
});


app.get('/api/itenscardapio', async (req, res) => {
  const itenscardapio = await prisma.itemCardapio.findMany()
  res.status(201).json(itenscardapio);
})


app.listen(3333, () => console.log("Rodando na porta 3333..."))