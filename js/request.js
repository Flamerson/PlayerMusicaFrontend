function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function Req(){
    data = Get("http://localhost:4001/album/todos")
    let req = JSON.parse(data)
    let lista = document.querySelector("#lista")
    req.forEach(element =>{
        let old = document.querySelector("#lista").innerHTML
        let newlist = `<li>
                            <button class="musica-icone" onclick="Redirect('${element.nome}')">
                                <div class="img-music">
                                    <i class="fa-solid fa-headphones"></i>
                                </div>
                                <p>${element.nome}</p>
                            </button>
                        </li>`
        lista.innerHTML = old + newlist
    })
}

function Redirect(p){
    window.location.href = `http://127.0.0.1:5500/frontend/album.html?${p}`
}

Req()