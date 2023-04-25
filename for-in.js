const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com",
};

dados.endereços = [ // lista para objetos 
    {
        rua: "R Joseph Climber",
        casa: 202,
        bairro: "Lagoas",
    },

];

for (let chave in dados){
    console.log(dados[chave]); // o valor de cada parte dos dados estão em colchetes 
}