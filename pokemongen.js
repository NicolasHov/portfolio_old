
function getPokemon() {
    var a = Math.round(Math.random()*11*80)
    var poke = pokedex[a]
    return afficherPokemon(poke)
}

function afficherPokemon(pokedex) {
    //afficher les stats
    var x = document.getElementById("infos");
    x.innerHTML = "Nom " + pokedex.name.french + 
    "<br>type: " + pokedex.type[0] +
    "<br>HP:" + pokedex.base.HP +
    "<br>Attack:" + pokedex.base.Attack +
    "<br>Defense:" + pokedex.base.Defense +
    // "<br>Sp. Attack:" + pokedex.base.Sp Attack +
    // "<br>Sp. Defense:" + pokedex.base.Sp Defense +
    "<br>Speed:" + pokedex.base.Speed

    //afficher l'image
    var path= "http://onvaessayer.org/algorithmes/JSON/pokemonsJSON/thumbnails/"+pokedex.id+".png"
    document.getElementById('image').src = path
  }
