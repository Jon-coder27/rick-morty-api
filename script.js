const apiUrl = "https://rickandmortyapi.com/api/character"

function createList(personagens) {
    const listaHTML = personagens.map((personagem) => {
        console.log(personagem)
        return `
        <div class="personagem">
            <img src="${personagem.image}" alt="${personagem.name}">
            <div class="personagem-conteudo">
                <h3>${personagem.name}</h3>
                <span id="status">status</span>
            </div>
         </div>
         `
         
    })

    document.getElementById('lista-personagens').innerHTML = listaHTML.join();

}

async function getPersonagens(search){
    const filter = search ? "?name="+search : ''
    const response = await fetch (apiUrl+filter)
    const {results} = await response.json()
    createList(results)
}

document.getElementById('search').addEventListener('keyup', (e)=> {
    getPersonagens(e.target.value)
})

window.addEventListener('load', getPersonagens())