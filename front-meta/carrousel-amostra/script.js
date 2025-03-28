const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 2;

function carroussel(){
    idx++

    if(idx > img.length-1){
        idx = 0
    }
    imgs.style.transform = `translateX(${-500}px)`
}

setInterval(carroussel, 1800)