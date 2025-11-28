function somaImpares(n) {
  let soma = 0; // Variável para guardar o resultado

  // Loop que vai de 1 até o número n
  for (let i = 1; i <= n; i++) {
    // Verifica se o número atual (i) é ímpar
    if (i % 2 !== 0) {
      soma += i; // Adiciona o número ímpar ao total
    }
  }

  return soma; // Retorna o valor final
}

console.log(somaImpares(15));  // Saída: 64
console.log(somaImpares(24)); // Saída: 144