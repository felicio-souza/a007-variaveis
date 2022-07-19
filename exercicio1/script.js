
const nome = prompt ("Qual seu nome?");

let idade = prompt ("Qual sua idade?");

console.log (
    typeof nome, 
    typeof idade );

    /*Antes da Atualização
    String e number 
    Este tipo foi impresso pois as variaveis nome estao apta a rececber String ou seja,
     texto e a variavel idade esta aptar a receber number  ou seja, numeros */

     
    /*Depois da Atualização
    String e String 
    Notei que mesmo digitando em idade o numero, o tipo se classifica como uma String */

console.log("Ola", nome, "Voce tem", idade, "anos")