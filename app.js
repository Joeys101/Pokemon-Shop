let pokemones = [
        {
            nombre: "Bulbasaur",
            id: 0,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 1000,
            image:"./pokemon/bulbasaur.png",
            tipo: "./pokemon/Planta.png"
        },
        {
            nombre: "Squirtle",
            id: 1,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 1000,
            image:"./pokemon/squirtle.png",
            tipo: "./pokemon/Agua.png"
        },
        {
            nombre: "Charmander",
            id: 2,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 1000,
            image:"./pokemon/charmander.png",
            tipo: "./pokemon/Fuego.png"
        },
        {
            nombre: "Treecko",
            id: 3,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 2000,
            image:"./pokemon/treecko.png",
            tipo: "./pokemon/Planta.png"
        },
        {
            nombre: "Mudkip",
            id: 4,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 1700,
            image:"./pokemon/mudkip.png",
            tipo:"./pokemon/Agua.png"
        },
        {
            nombre: "Torchic",
            id: 5,
            caracteristica: "Starter",
            caracteristica2: "MenorPrecio",
            precio: 1500,
            image:"./pokemon/torchic.png",
            tipo:"./pokemon/Fuego.png"
        },
        {
            nombre: "Kyogre",
            id: 6,
            caracteristica: "Legendario",
            caracteristica2: "MayorPrecio",
            precio: 19000,
            image:"./pokemon/kyogre.png",
            tipo:"./pokemon/Agua.png"
        },
        {
            nombre: "Zekrom",
            id: 7,
            caracteristica: "Legendario",
            caracteristica2: "MayorPrecio",
            precio: 25000,
            image:"./pokemon/zekrom.png",
            tipo:"./pokemon/Electrico.png"
        },
        {
            nombre: "Darkrai",
            id: 8,
            caracteristica: "Singular",
            caracteristica2: "MayorPrecio",
            precio: 50000,
            image:"./pokemon/darkrai.png",
            tipo:"./pokemon/Siniestro.png"
        },
    
        
    ]
    
    
    // Creacion de Pokemons
    const divGlobal = document.querySelector(".pokemonBox")
    
    
    pokemones.forEach(item => {
    let container = document.createElement("div")
    let name = document.createElement("h3")
    let price = document.createElement("p")
    let img = document.createElement("img")
    let type = document.createElement("img")

        price.textContent = "Precio:" + " " + "$" + item.precio
        name.textContent = item.nombre
        img.src = item.image
        type.src = item.tipo
        
        container.appendChild(img)
        container.appendChild(type)
        container.appendChild(name)
        container.appendChild(price)
        
        container.className = "pokemons"
        img.className = "imgPokemon"
        type.className = "type"
        container.id = "pokemons"  
        img.id = "imgPokemon"
        type.id = "type"
        
        container.classList.add(item.caracteristica, item.caracteristica2, "hide");

        divGlobal.appendChild(container)
    }) 

    // Funciones de botones

    function filterProduct(value) {
	
    
        let buttons = document.querySelectorAll(".buttonValue");
        buttons.forEach((button) => {
          
          if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
          } else {
            button.classList.remove("active");
          }
        }); 
    

        let elements = document.querySelectorAll(".pokemons");
    
        elements.forEach((element) => {
          
          if (value == "Mostrar todo") {
            element.classList.remove("hide");
          } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
              element.classList.add("hide");
            }
          }
        
        });
      }
  // Filtro de busqueda