let pokemonImg = document.getElementById("pokemonImg")
let pokemonName = document.getElementById("pokemonName")
let pokemonExperience = document.getElementById("pokemonExperience")

let pokemon2 = document.getElementById("pokemon2")
let pokemonName2 = document.getElementById("pokemonName2")
let pokemonExperience2 = document.getElementById("pokemonExperience2")

let btnBatalhar = document.getElementById("btnBatalhar")
let vencedor = document.getElementById("vencedor")

btnBatalhar.addEventListener("click" , function(){
    let random1 = Math.floor(Math.random() * 649) + 1;
    let random2 = Math.floor(Math.random() * 649) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        pokemonImg.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemonName.innerText = data.name
        pokemonExperience.innerText = data.base_experience

        fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
        .then((res) => res.json())
        .then((data) =>{
        pokemon2.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemonName2.innerText = data.name
        pokemonExperience2.innerText = data.base_experience   

        if(Number(pokemonExperience.innerText) > Number(pokemonExperience2.innerText)){
            vencedor.innerText = ` 🏆${pokemonName.innerText} venceu a batalha!` 
        }else if (Number(pokemonExperience2.innerText) > Number(pokemonExperience.innerText)){
            vencedor.innerText = ` 🏆${pokemonName2.innerText} venceu a batalha!`
        }else{
            vencedor.innerText = "Empate"
        }

        })
    })
})