const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
  );
  
  const chaves = ["nome", "idade", "cpf", "email"];
  
  chaves.forEach((chave) => { // cada indice do vetor vai ter o nome chave 
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`); //Ou seja, o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade
  });