let produtos =[{nome: "macarrão", codigo: 1234, valor: 123455}];
const reprovados = produtos.filter(codigoProduto => codigoProduto.codigo == 1234);
const nomeProduto = reprovados.map(nomeProduto => nomeProduto.nome)
const valorProduto = reprovados.map(valorProduto => valorProduto.valor);
console.log(`o valor do produto com o codigo ${reprovados} é valor: ${valorProduto}`)