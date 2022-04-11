const newvol = document.querySelector("#vol")
var player;

var vol = 0

// verifica o volume do audio , coloquei um contador , mas pode fazer de outra forma só não sei
setInterval(()=>{
    vol = newvol.value * 0.01
    if(player){
        player.volume = vol
    }
},256)

// da play na musica escolhida
function playaudio(src){
    if(player){
        if(player.paused != true){
            player.pause()
        }
    }
    player = new Audio(`https://musicateste.s3.amazonaws.com/09bf367546b0c774785024210a1cf11e-audio1.ogg`)
    player.volume = vol
    player.play()
}

// toca nosso grande audio famoso da play e da pause
function playmusic(){

    if(player.paused == true){
        player.play()
        playpause = 1
    }else{
        player.pause()
        playpause = 0
    }

}

var last;
// aqui muta a musica e desmuta
function mutemusic(){
    if(player.volume != 0){
        last = vol
        newvol.value = 0
        player.volume = vol
    }else{
        newvol.value = last * 100
    }
}