const clientes = require("./procurandoObjeto.json");

function procurandoApartamento(clientes){ 
    return (clientes.filter( function(cliente){ //Essa função filter vai receber uma função flecha (=>), passando por cada campo de cliente - filter possui arrowFunction
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")); // vai verificar se o endereco do apartamento nao tenha complemento(verdadeiro ou falso)
    }))
}

const filtrados = procurandoApartamento(clientes);

console.log(filtrados);