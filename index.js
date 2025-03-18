const kő=document.getElementById("kő")
const papír=kő.nextElementSibling
const olló=papír.nextElementSibling
const szöveg=document.getElementById("állapot") 
let ember=0
let gép=0
kő.onclick=function(){
    let kpo=0
    let random=Math.floor(Math.random()*3)
    if(random==0){
        console.log("Kő  -  Kő")
    }else if(random==1){
        console.log("Kő  -  Papír")
    }else{
        console.log("Kő  -  Olló")
    }
    if(kpo==0 && random==1){
        gép+=1
    }else if(kpo==0 && random==2){
        ember+=1
    }else if(kpo==1 && random==0){
        ember+=1
    }else if(kpo==1 && random==2){
        gép+=1
    }else if(kpo==2 && random==0){
        gép+=1
    }else if(kpo==2 && random==1){
        ember+=1
    }
    console.log(`Ember:${ember}  Gép:${gép}`)
    var image=document.getElementById("kőkép")
    image.setAttribute('src', 'papír.png')
}

papír.onclick=function(){
    let kpo=1
    let random=Math.floor(Math.random()*3)
    if(random==0){
        console.log("Papír  -  Kő")
    }else if(random==1){
        console.log("Papír  -  Papír")
    }else{
        console.log("Papír  -  Olló")
    }
    if(kpo==0 && random==1){
        gép+=1
    }else if(kpo==0 && random==2){
        ember+=1
    }else if(kpo==1 && random==0){
        ember+=1
    }else if(kpo==1 && random==2){
        gép+=1
    }else if(kpo==2 && random==0){
        gép+=1
    }else if(kpo==2 && random==1){
        ember+=1
    }
    console.log(`Ember:${ember}  Gép:${gép}`)
}

olló.onclick=function(){
    let kpo=2
    let random=Math.floor(Math.random()*3)
    if(random==0){
        console.log("Olló  -  Kő")
    }else if(random==1){
        console.log("Olló  -  Papír")
    }else{
        console.log("Olló  -  Olló")
    }
    if(kpo==0 && random==1){
        gép+=1
    }else if(kpo==0 && random==2){
        ember+=1
    }else if(kpo==1 && random==0){
        ember+=1
    }else if(kpo==1 && random==2){
        gép+=1
    }else if(kpo==2 && random==0){
        gép+=1
    }else if(kpo==2 && random==1){
        ember+=1
    }
    console.log(`Ember:${ember}  Gép:${gép}`)
}
