const PainoKeys = document.querySelectorAll('.piano-keys .key')
let audio = new Audio('a.ogg')
const playtune = (key)=>{
    audio.src = `${key}.ogg`
audio.play();
}

PainoKeys.forEach(key=>{
    key.addEventListener('click' ,() => playtune(key.dataset.key))
 
})

