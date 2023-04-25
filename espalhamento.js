console.log("Espalhamento");

const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com",
    telefones: [12223345, 998322919],
};

dados.endereços = [ // lista para objetos 
    {
        rua: "R Joseph Climber",
        casa: 202,
        bairro: "Lagoas",
    },

];

function ligaParaCliente(telefoneNormal, telefoneComercial){
    console.log(`Ligando para ${telefoneNormal}`);
    console.log(`Ligando para ${telefoneComercial}`);
}

ligaParaCliente(dados.telefones[0], dados.telefones[1]); // usando a função ou o operador de espalhamento (ligaParaCliente[...cliente.telefone])

const encomenda = {
    destinatario: dados.nome,
    endereço: dados.endereço[0], // como endereço é um array (lista) para o objeto dados, temos que colocar em forma de indice 
}

