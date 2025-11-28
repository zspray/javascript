function dividirNumeros(number1, number2) {
    try{
        if(number2 === 0){
            throw new Error("Divisão por zero não é permitida.");
        }
        return number1 / number2;
    }
    catch(error){
        return "Erro" + error.message;
            }
}

console.log(dividirNumeros(20, 2)); 
console.log(dividirNumeros(6, 0)); 
console.log(dividirNumeros(21, 3)); 


try {
  // Código suscetível a erro (tentar usar uma variável que não existe)
  console.log(variavelInexistente); 

} catch (erro) {
  // O código cai aqui se der erro acima
  console.log("Ocorreu um problema: " + erro.message);
}