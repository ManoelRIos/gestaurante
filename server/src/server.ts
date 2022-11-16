import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(cors())

const prisma = new PrismaClient({
  log:['query']
});


//Item do Cardapio
app.post('/api/itenscardapio', async (req, res) => {
  const body: any = req.body;
  const itemCardapio = await prisma.itemCardapio.create({
    data: {
      nome: body.nome,
      descricao: body.descricao,
      preco: body.preco,
      quantidade: body.quantidade,
      imagem: body.imagem,
      categoria: body.categoria
    }
  });
  return res.status(201).json(itemCardapio);
});

app.get('/api/itenscardapio', async (req, res) => {
  const itensCardapio = await prisma.itemCardapio.findMany()
  res.status(201).json(itensCardapio);
});

app.get('/api/itensCardapio:id', async (req, res) => {
  const id = req.params.id;
  const itemCardapio = await prisma.itemCardapio.findFirst({
    where: { id: id }
  });
  res.status(201).json(itemCardapio)
});

//Item do Pedido

/* app.post('api/itempedido', async(req, res) => {
  const body: any = req.body;
  const itemPedido = await prisma.itemPedido.create({})
}); */



app.listen(3333, () => console.log("Rodando na porta 3333..."));