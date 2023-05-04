//Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável
//let nome

//Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável
//let idade


// Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof
//console.log(typeof nome) 
//console.log(typeof idade)

//Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código
//Foi impresso no console o tipo da variável porque foi usado a palavra typeof

//Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let nome = prompt ("Digite seu nome")
let idade = Number(prompt("Digite sua idade")) 


//Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código
//No console apareceu string ao invés de number. Para mudar de string para number, tem que digitar "Number" antes do prompt

console.log(typeof nome) 
console.log(typeof idade)


//imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: nome e idade são os valores inseridos pelo usuário.
console.log("Olá", nome, "você tem", idade, "anos")

//outra opção para escrever console.log(`Olá, ${nome}  você tem ${idade} anos `)