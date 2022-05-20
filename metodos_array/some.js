let mala = [20,30,40,35];

let pesoMaior = mala.some(function(maior){
    return maior > 34;
});

console.log(pesoMaior)

// no caso do some , ele trabalha com os valores Bolem , porém no seu caso recorre e encontrando o valor já interrompe imprimindo .