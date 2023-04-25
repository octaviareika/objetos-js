const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com"
};

console.log(dados.nome);
console.log(dados[nome]);

console.log(`Os primeiros digitos do cpf são ${dados.cpf.substring(0, 4)}`);
