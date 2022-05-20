let  alunos = [
    {nome:"João", idade: 13, serie:"5A"},
    {nome:"Maria", idade: 18, serie:"8B"},
    {nome:"Joaquim", idade:15, serie:"5A"},
    {nome:"Camila", idade:19, serie:"8B"}
];

let aluno = alunos.find(function(aluno){
    return aluno.nome === "João";   // lembrando que no find usamos o valor de atribuição  ===
}
 )
 console.log(aluno)  

 // O metodo find pega exclusivamente um unico item da lista , por esse motivo seria interessante retorna via nome ou sobre nome 