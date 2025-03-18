const kő=document.getElementById("kő")
const papír=kő.nextElementSibling
const olló=papír.nextElementSibling
const szöveg=document.getElementById("állapot") 
const pontok=document.getElementById("pontok")
const kiírás=document.getElementById("állapot_nagy")
const ember_pont=document.getElementById("ember_pont")
const gép_pont=document.getElementById("gép_pont")

let ember=0
let gép=0

var image=document.getElementById("kőkép")
var image2=document.getElementById("gépkép")

function megjelen(){image.classList.remove("rejt")
    image2.classList.remove("rejt")
}
function vált0(){image.setAttribute("src", "kő.png")
    image2.setAttribute("src", "kő.png")
}
function vált1(){image.setAttribute('src', 'papír.png')
    image2.setAttribute('src', 'papír.png')
}
function vált2(){image.setAttribute('src', 'olló.png')
    image2.setAttribute('src', 'olló.png')
}
function eltűnik(){image.classList.add("rejt")
    image2.classList.add("rejt")
}



kő.onclick=function(){
    let kpo=0
    let random=Math.floor(Math.random()*3)


/* KIJELZŐ */
    if(random==0){
        console.log("Kő  -  Kő")
        setTimeout(() => {
            image2.setAttribute("src", "kő.png")
        }, 1999)
    }else if(random==1){
        console.log("Kő  -  Papír")
        setTimeout(() => {
            image2.setAttribute("src", "papír.png")
        }, 1999)
    }else{
        console.log("Kő  -  Olló")
        setTimeout(() => {
            image2.setAttribute("src", "olló.png")
        }, 1999)
    }


/* PONTSZÁMLÁLÓ */
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
    setTimeout(eltűnik, 100)
    setTimeout(megjelen, 300)
    setTimeout(vált0, 301) 
    setTimeout(vált1, 700) 
    setTimeout(vált2, 1400)
    setTimeout(eltűnik, 1800)
    setTimeout(megjelen, 2000)
    setTimeout(() => {
        image.setAttribute("src", "kő.png")
    }, 1999);
    kiírás.classList.remove("rejt")
    pontok.classList.remove("rejt")
    setTimeout(() => {
        ember_pont.textContent=ember;
        gép_pont.textContent=gép
    }, 2200);
}

papír.onclick=function(){
    let kpo=1
    let random=Math.floor(Math.random()*3)


/* KIJELZŐ */
    if(random==0){
        console.log("Papír  -  Kő")
        setTimeout(() => {
            image2.setAttribute("src", "kő.png")
        }, 1999)
    }else if(random==1){
        console.log("Papír  -  Papír")
        setTimeout(() => {
            image2.setAttribute("src", "papír.png")
        }, 1999)
    }else{
        console.log("Papír  -  Olló")
        setTimeout(() => {
            image2.setAttribute("src", "olló.png")
        }, 1999)
    }


/* PONTSZÁMLÁLÓ */
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
    setTimeout(eltűnik, 100)
    setTimeout(megjelen, 300) 
    setTimeout(vált0, 5) 
    setTimeout(vált1, 700) 
    setTimeout(vált2, 1400)
    setTimeout(eltűnik, 1800)
    setTimeout(megjelen, 2000)
    setTimeout(() => {
        image.setAttribute("src", "papír.png")
    }, 1999);
    kiírás.classList.remove("rejt")
    pontok.classList.remove("rejt")
    setTimeout(() => {
        ember_pont.textContent=ember;
        gép_pont.textContent=gép
    }, 2200);
}

olló.onclick=function(){
    let kpo=2
    let random=Math.floor(Math.random()*3)


/* KIJELZŐ */
    if(random==0){
        console.log("Olló  -  Kő")
        setTimeout(() => {
            image2.setAttribute("src", "kő.png")
        }, 1999)
    }else if(random==1){
        console.log("Olló  -  Papír")
        setTimeout(() => {
            image2.setAttribute("src", "papír.png")
        }, 1999)
    }else{
        console.log("Olló  -  Olló")
        setTimeout(() => {
            image2.setAttribute("src", "olló.png")
        }, 1999)
    }


/* PONTSZÁMLÁLÓ */
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
    setTimeout(eltűnik, 100)
    setTimeout(megjelen, 300) 
    setTimeout(vált0, 5) 
    setTimeout(vált1, 700) 
    setTimeout(vált2, 1400)
    setTimeout(eltűnik, 1800)
    setTimeout(megjelen, 2000)
    setTimeout(() => {
        image.setAttribute("src", "olló.png")
    }, 1999);
    kiírás.classList.remove("rejt")
    pontok.classList.remove("rejt")
    setTimeout(() => {
        ember_pont.textContent=ember;
        gép_pont.textContent=gép
    }, 2200);
}

