const PainoKeys = document.querySelectorAll('.piano-keys .key')
const VolumeSlider = document.querySelector('.volume-slider input')
const CheckBox= document.querySelectorAll('.keys-checkbox input')

let audio = new Audio('a.ogg')
const playtune = (key)=>{
    audio.src = `${key}.ogg`
audio.play();

const clickedKey = document.querySelector(`[data-key="${key}"]`)

clickedKey.classList.add('active')

setTimeout(()=>{
    clickedKey.classList.remove('active')
},150)
}

PainoKeys.forEach(key=>{
    key.addEventListener('click' ,() => playtune(key.dataset.key))
 
})
const handleKeys = () =>{
    PainoKeys.forEach(key=>
        key.classList.toggle("hide" )
      
     
    )
}
const pressedKey = (e)=>{
playtune(e.key)
}
const HandleVolume = (e) =>{
    audio.volume = e.target.value;
}

document.addEventListener('keypress',pressedKey)
document.addEventListener('click',handleKeys)
document.addEventListener('input',HandleVolume)
