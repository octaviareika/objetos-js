console.log("Criando uma lista em objetos!");

const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com",
};

dados.endereços = [ // lista para objetos (array em forma de objetos)
    {
        rua: "R Joseph Climber",
        casa: 202,
        bairro: "Lagoas",
    },

];

dados.endereços.push({
    rua: "R. Joseph Ladder",
    casa: 404,
    bairro: "Lagoas",
    
});

console.log(dados)