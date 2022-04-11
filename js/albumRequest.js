var params = window.location.search.substring(1).split("?")
function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

// faz a requisição da lista de musicas que existe no album
function RequestAlbum(){
    data = Get(`http://localhost:4001/album/${String(params)}`)
    let req = JSON.parse(data)
    let lista = document.querySelector("#lista-musica")
    req.forEach(element => {
        let old = document.querySelector("#lista-musica").innerHTML
        let newList =  `<li>
                            <p class="p1">${element.musicaid}</p>
                            <button class="img-musica-album p2">
                                <i class="fa-solid fa-headphones"></i>
                                <div class="nome-musica-artista">
                                    <p>${element.nome}</p>
                                    <p>${element.banda}</p>
                                </div>
                            </button>
                            <p class="p3">${element.album}</p>
                            <p class="p4">${element.genero}</p>
                        </li>`
        lista.innerHTML = old + newList
    })
}

RequestAlbum()