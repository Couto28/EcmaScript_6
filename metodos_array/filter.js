let car = [
    {marca:"Fiat", cor:"Vermelha", km: 0},
    {marca:"Gol", cor:"Branca", km: 0},
    {marca:"Palio", cor:"Branca", km: 0},
    {marca:"Hiwnday", cor:"Vermelha", km:0}
];

let SelecCar = car.filter(function(color){
    return color.cor == "Vermelha";
})

console.log(SelecCar);

// criar para alunos :

let  alunos = [
    {nome:"João", idade: 13, serie:"5A"},
    {nome:"Maria", idade: 18, serie:"8B"},
    {nome:"Joaquim", idade:15, serie:"5A"},
    {nome:"Camila", idade:19, serie:"8B"}
];

let alunosMaior = alunos.filter(function(maior18){
    return maior18.idade >= 18 ;
})

console.log(alunosMaior); 

