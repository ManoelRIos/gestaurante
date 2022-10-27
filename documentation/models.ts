//Atributos de relacionamento apenas no diagrama de classe
//Detem, Possui, apropria

class Venda {

}

class Mesa {

  id!: number;
  numeroMesa: number;
  assentos : number ;   
  // 1 Mesa POSSUI 1 Conta
}

class Conta {
  id: number;
  assentosOcupados: number;
  horaAbertura: number;
  horaDoFechamento: Date;
  status; //Aberta ou fechad: numbera
  pedidos: number;
  // 1 Conta POSSUI1 N Pedidos
}

class Pedido {
  id :number
  tempoDecorrido : string
  itensPedido : ItemPedido
  observacao : string
  status : number
  // 1 Pedido POSSI2 N ItensPedido
}

class ItemPedido{
  id: number
  quantidade: number
  itemCardapio: number
  // 1 ItemPedido POSSUI3 1 ItemCardapio
}

class Cardapio {
  id;
  itensCardapio;
  // 1 Cardapio POSSUI4 N ItemCardapio
}

class ItemCardapio{
  /* VARIABLES */  
  id;
  nome;
  descricao;
  preco;
  quantidade;
  imagem;
  categoria: string;
}

class Funcionario {
  /* VARIABLES */
  id: number;
  nome: string;
  cpf;
  cep; //Atualizar dados aprtir da Api VIACEP;
  endereco;
  numeroEndereco;
  estado;
  email;
  celular;
  usuario;
  senha;
  cargo;
  /* END VARIABLES */ 
}
