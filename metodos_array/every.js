let  alunos = [
    {nome:"João", idade: 13, serie:"5A"},
    {nome:"Maria", idade: 18, serie:"8B"},
    {nome:"Joaquim", idade:15, serie:"5A"},
    {nome:"Camila", idade:19, serie:"8B"}
];

let todosMaiores = alunos.every(function(aluno){
    return aluno.idade > 18;
})

console.log(todosMaiores)

// O metodo every trabalha no valor bolem  True ou False  ... Nesse caso percorremos um array procurando se todos são maiores .
//da mesma forma podemos  procurar se todos são menores a determinada idade etc ...


