import express, { json } from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
  log:['query']
});


/* ITEM DO CARDAPIO */
app.post('/api/itemcardapio', async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
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
  } catch (error) {
    return res.json(error) 
  }
});

app.get('/api/itenscardapio', async (req, res) => {
  const itensCardapio = await prisma.itemCardapio.findMany()
  res.status(201).json(itensCardapio);
});

app.get('/api/itemcardapio/:id', async (req, res) => {
  const id = Number(req.params.id);
  const itemCardapio = await prisma.itemCardapio.findFirst({
    where: { id: id }
  });
  res.status(201).json(itemCardapio)
});

app.get('/api/itenscardapio/:cat', async (req, res) =>{
  const cat = req.params.cat;
  const itensCardapio = await prisma.itemCardapio.findMany({
    where: {categoria: cat}
  });
  res.status(201).json(itensCardapio)
})

app.put('/api/itemcardapio/:id', async (req, res) => {
  const body = req.body;
  const id = Number(req.params.id);
  const updateItemCardapio = await prisma.itemCardapio.update({
    where: {id: id},
    data: {
      nome: body.nome,
      descricao: body.descricao,
      preco: body.preco,
      quantidade: body.quantidade,
      imagem: body.imagem,
      categoria: body.categoria
    }
  });
  return res.status(200).json(updateItemCardapio)
})

app.delete('/api/itemcardaio/delete/:id', async(req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.itemCardapio.delete({
      where: { id: id}
    });
    return res.status(200).json(id)
  } catch (error) {
    res.json(error)
  }
})
/* FINAL ITEM DO CARDAPIO */


/* CARDAPIO */
app.get('/api/cardapio', async(req,res) => {
  try {
    const cardapio = await prisma.cardapio.findMany({});
    res.json(cardapio);
  } catch (error) {
    return res.json(error)
  }
})
/* FINAL CARDAPIO */


/* ITEM DO PEDIDO */
/* Criar item do pedido  */
app.post('/api/itempedido/itemcardapio/:itemCardapioId', async(req, res) => {
  const body: any = req.body;
  const itemCardapioId = Number(req.params.itemCardapioId);
  const itemCardapio: any = await prisma.itemCardapio.findFirst({ where: {id: itemCardapioId}})
  console.log(body)
  try {
    const itemPedido = await prisma.itemPedido.create({
      data: {
        pedidoId: body.pedidoId,
        itemCardapioId,
        itemCardapio: itemCardapio,
        quantidade: body.quantidade
      }
    });
    res.status(201).json(itemPedido)
  } catch (error) {
    return res.json(error)
  }
});

// Retorna todos itens do pedido
app.get('/api/itenspedido', async(req,res) => {
  const itemPedido = await prisma.itemPedido.findMany({
    include: {
      itemCardapio: true
    }
   })
  res.status(201).json(itemPedido)
});

//Retorna item do pedido específico 
app.get('/api/pedido/:id/itempedido/:id', async(req, res) => {
  
});

app.delete('/api/itempedido/:id', async(req, res) => {
  const id = req.params.id;
  await prisma.pedido.delete({
    where: {id : id}
  })
})
/* FIM ITEM DO PEDIDO */

/* PEDIDO */
/* Criar pedido  */
app.post('/api/pedido/:id', async(req, res) => {
  const body = req.body;
  const contaId = req.params.id;
  const itensPedido: any = await prisma.itemPedido.findMany({})
  console.log(itensPedido)
  const pedido = await prisma.pedido.create({
    data: {
      contaId,
      itensPedido: req.body
    },
    include: {
      itensPedido: true
    }
  });
  return res.status(201).json(pedido)
})

/* Retorna todos os pedidos da conta */
app.get('/api/conta/:id/pedidos', async(req, res) => {
  const id = req.params.id;
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        itensPedido: true,
      }
    });
    return res.status(201).json(pedidos)
  } catch (error) {
    return res.json(error)
  }
})
/* FIM PEDIDO */

/* USUARIO */
/* Criar um novo usuario */
app.post('/api/usuario', async(req, res) =>{
  const body = req.body;
  const usuario = await prisma.usuario.create({
    data: {
      nome: body.nome,
      email: body.email,
      senha: body.senha,
      cargo: body.cargo
    }
  });
  return res.status(201).json(usuario)
})

app.get('/api/usuario', async(req, res) => {
  const usuarios = await prisma.usuario.findMany({});
  return res.status(200).json(usuarios)
})

app.delete('/api/usuario/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.usuario.delete({
      where: {id : id}
    });
    return res.status(200).json(id)
  } catch (error) {
    res.json(error)
  }
})

app.put('/api/usuario/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body
  const updateUsuario = await prisma.usuario.update({
    where: { id: id},
    data: {
      nome: body.nome,
      email: body.email,
      senha: body.senha,
      cargo: body.cargo
    }
  });
  return res.status(200).json(updateUsuario)
})
/* FIM USUARIO */



app.listen(3333, () => console.log("Rodando na porta 3333..."));