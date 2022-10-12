<?php

//Atributos de relacionamento apenas no diagrama de classe
//Detem, Possui, apropria
class Mesa {
  /* VARIABLES */
  public int $id;
  public int $numeroMesa;
  public int $assentos;      
  /* END VARIABLES */
  // 1 Mesa POSSUI 1 Conta

  function ManterMesa(){ }
}

class Conta {
  public int $id;
  public int $assentosOcupados;
  public DateTime $horaAbertura;
  public DateTime $horaDoFechamento; 
  public bool $status; //Aberta ou fechada
  public Array $pedidos;
  // 1 Conta POSSUI1 N Pedidos
}

class Pedido {
  public int $id;
  public int $tempoDecorrido;
  public Array $itensPedido;
  public string $observacao;
  public string $status;
  // 1 Pedido POSSI2 N ItensPedido
}

class ItemPedido{
  public int $id;
  public int $quantidade;
  public Array $itemCardapio;
  // 1 ItemPedido POSSUI3 1 ItemCardapio
}

class Cardapio {
  public int $id;
  public Array $itensCardapio;
  // 1 Cardapio POSSUI4 N ItemCardapio
}

class ItemCardapio{
  /* VARIABLES */  
  public int $id;
  public string $nome;
  public string $descricao;
  public float $preco;
  public int $quantidade;
  public string $imagem;
}

class Funcionario {
  /* VARIABLES */
  public int $id;
  public string $nome;
  public string $cpf;
  public string $cep; //Atualizar dados aprtir da Api VIACEP;
  public string $endereco;
  public int $numeroEndereco;
  public string $estado;
  public string $email;
  public string $celular;
  public string $usuario;
  public string $senha;
  public Array $cargo;
  /* END VARIABLES */ 
}

?>
