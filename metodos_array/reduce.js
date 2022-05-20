let numeros = [ 1,2,3,4,5];  // criamos uma lista de numeros

let soma= 0;  //criamos uma variavel com o valor 0 

// em seguida criamos uma function anonima com a segunda cariavel e atribuimos nela a primeira varivael com o metodo reduce .
// em seguida atribuimos ao parametro as variaveis criadas .

soma = numeros.reduce(function(soma,numeros){
    return soma + numeros;
})

console.log(soma);

// outro exemplo :

let alunos	=	[
    {nome:'joão',	idade:	10},
    {nome:'josé',	idade:	20},
    {nome:'marcos',	idade:	30}
];

let nomes = alunos.reduce(function(arrayNomes, aluno){
    arrayNomes.push(aluno.nome);
    return arrayNomes;
},[]);

console.log(nomes);