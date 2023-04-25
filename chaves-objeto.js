

const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com",
};

dados.endereços = [ // lista para obejtos 
    {
        rua: "R Joseph Climber",
        casa: 202,
        bairro: "Lagoas",
    },

];

const chavesDoObjeto = Object.keys(dados); //depois usaremos uma classe que é um conjunto de várias funções que nos ajudam a lidar com objetos. Vamos chamar o Object.keys() e passaremos como parâmetro o "dados"


if (!chavesDoObjeto.includes("endereços")){ // se as chaves do objeto possui algum nome com endereço 
    console.log("Erro, é necessário ter algum endereço!");
}