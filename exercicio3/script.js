//cadastro de colaboradores e armazenamento de respostas
//perguntas à pessoa colaboradora

let nomeCompleto = prompt("Qual seu nome e sobrenome?")

const nascimento = Number(prompt("Qual sua data de nascimento? (dd/mm/aa)"))

let endereco = prompt("Qual seu endereço?(rua, bairro, cidade, estado)")

const cpf = prompt("Qual seu CPF?")

let escolaridade = prompt("Qual sua escolaridade?")

let cnh = prompt("Possui CNH?")

let filhos = Number(prompt("Quantos filhos você tem?"))

let cargoAtual = prompt ("Qual seu cargo atual?")

let salario = prompt("Qual seu salário?")

let comissao = confirm("Você recebe comissão?")

let anoAdmissao = Number(prompt("Informe o ano da sua admissão?"))

//revisão das variáveis: fazer CASTING para varíaveis que saíram como string e são números. Inserrir Number na frente do prompt

//imprimir no console o tipo de todas as variáveis

console.log(typeof nomeCompleto);
console.log(typeof nascimento);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof anoAdmissao);


//imprimir no console um relatório da pessoa colaboradora

console.log(nomeCompleto);
console.log(nascimento);
console.log(endereco);
console.log(cpf);
console.log(escolaridade);
console.log(cnh);
console.log(filhos);
console.log(cargoAtual);
console.log(salario);
console.log(comissao);
console.log(anoAdmissao);



