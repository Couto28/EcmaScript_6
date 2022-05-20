let nomes = ["Maria","Pedro","José"];

// function callback para percorrer o array

nomes.forEach(function(nome){
    console.log(nome)
})

// sem function callback .

let carros = ["Uno","Gol","Fusca"];

function nomeCarros(carro){
    console.log(carro);
}

carros.forEach(nomeCarros);   // dessa forma precisamos chamar a variavel com o metodo e imoprimir com a variavel function 

// adicionando item em callback 

let lista = ["Globo","Sbt","Recor"];

lista.forEach(function(tv){
    lista.push("Tv gazeta")
    console.log(tv)
})

console.log(lista);

let avatar = ["Pikachu","Bubassauro","Charlezard"];

avatar.forEach((pokemon) => {
    avatar.push("MestrePokemon")
    console.log(pokemon)
})

console.log(avatar);