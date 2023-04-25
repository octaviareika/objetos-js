const dado = require("./cliente.json"); // pega um arquivo que vem de outro lugar 

console.log(dado);

const transformarClienteEmString = JSON.stringify(dado); // transformar objeto em string 

console.log(transformarClienteEmString);