console.log("FUNÇÕES!!!")
console.log("Verificar se o saldo é suficiente")

const dados = {
    nome: "José",
    idade: 32,
    cpf: 12333367851,
    email: "josealuminio@gmail.com",
    saldo: 200,
    pagamento: function(valor){
        if (valor > this.saldo){ // representa o objeto atual com o que estamos trabalho 
        console.log("Saldo insuficiente");

        }
        else {
            this.saldo = this.saldo - valor;
            console.log("Pagamento efetuado");
            console.log(`${this.value}`); // Novo salddo
        }

    }
};

dados.pagamento(300); // chamar a função de maneira implicita 