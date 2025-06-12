let pokemonImg = document.getElementById("pokemonImg")
let pokemonName = document.getElementById("pokemonName")
let pokemonExperience = document.getElementById("pokemonExperience")

let pokemon2 = document.getElementById("pokemon2")
let pokemonName2 = document.getElementById("pokemonName2")
let pokemonExperience2 = document.getElementById("pokemonExperience2")

let btnBatalhar = document.getElementById("btnBatalhar")
let vencedor = document.getElementById("vencedor")

let searchPokemon = Math.floor(Math.random() * 850) + 1;  

    function pokebola(pokemonId){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        pokemonImg.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemonName.innerText = data.name
        pokemonExperience.innerText = data.base_experience
    })
    }

    function pokebola2(pokemonId){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((res) => res.json())
         .then((data) => {
            pokemon2.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
         pokemonName2.innerText = data.name
         pokemonExperience2.innerText =  data.base_experience
         })
    }


 btnBatalhar.addEventListener("click", function(){
    searchPokemon +=1
    pokebola(searchPokemon)
    if (Number(pokemonExperience.innerText) > Number(pokemonExperience2.innerText)) {
        vencedor.innerText = `🏆Vencedor: ${pokemonName.innerText}`
    }else if(Number(pokemonExperience.innerText) == Number(pokemonExperience2.innerText)){
        vencedor.innerText = "Empate"
    }else{
         vencedor.innerText = `🏆Vencedor: ${pokemonName2.innerText}`
    }
    
})

     btnBatalhar.addEventListener("click", function(){
    searchPokemon +=1
    pokebola2(searchPokemon)
     if (Number(pokemonExperience.innerText) < Number(pokemonExperience2.innerText)) {
        vencedor.innerText = `🏆Vencedor: ${pokemonName2.innerText}`
    }else if(Number(pokemonExperience.innerText) == Number(pokemonExperience2.innerText)){
         vencedor.innerText = "Empate"
    }else{
        vencedor.innerText = `🏆Vencedor: ${pokemonName.innerText}`
    }
    
})



pokebola(123)
pokebola2(204)

