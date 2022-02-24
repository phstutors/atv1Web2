let produtos =[{nome: "macarrão", codigo: 1234, valor: 123455}];


function comprar(){
    const codigo = document.getElementById('codigo').innerHTML;
    const codigoFlot = parseFloat(codigo);
    if(codigoFlot == 1234){
        const reprovados = this.produtos.filter(codigoProduto => codigoProduto.codigo == 1234);
        const nomeProduto = reprovados.map(nomeProduto => nomeProduto.nome)
        const valorProduto = reprovados.map(valorProduto => valorProduto.valor);
        console.log(`o valor do produto ${nomeProduto} é: ${valorProduto}`)
    }
}