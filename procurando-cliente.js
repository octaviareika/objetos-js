const dados = require("./procurandoObjeto.json");


function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor)); // pegar um item dentro dessa chave e verificar se ele é verdadeiro, retorna um booleano

}

console.log(encontrar(dados, "nome", "Olva")); 