let boom = document.querySelector(".boom")
let clap = document.querySelector(".clap")
let hihat = document.querySelector(".hihat")
let kick = document.querySelector(".kick")
let openhat = document.querySelector(".openhat")
let ride = document.querySelector(".ride")
let snare = document.querySelector(".snare")
let tink = document.querySelector(".tink")
let tom = document.querySelector(".tom")

let boomSfx = new Audio("sounds/boom.wav")
let clapSfx = new Audio("sounds/clap.wav")
let hihatSfx = new Audio("sounds/hihat.wav")
let kickSfx = new Audio("sounds/kick.wav")
let openhatSfx = new Audio("sounds/openhat.wav")
let rideSfx = new Audio("sounds/ride.wav")
let snareSfx = new Audio("sounds/snare.wav")
let tinkSfx = new Audio("sounds/tink.wav")
let tomSfx = new Audio("sounds/tom.wav")

boom.addEventListener("click", ()=>{
    boomSfx.play()
})
clap.addEventListener("click", ()=>{
    clapSfx.play()
})
hihat.addEventListener("click", ()=>{
    hihatSfx.play()
})
kick.addEventListener("click", ()=>{
    kickSfx.play()
})
openhat.addEventListener("click", ()=>{
    openhatSfx.play()
})
ride.addEventListener("click", ()=>{
    rideSfx.play()
})
snare.addEventListener("click", ()=>{
    snareSfx.play()
})
tink.addEventListener("click", ()=>{
    tinkSfx.play()
})
tom.addEventListener("click", ()=>{
    tomSfx.play()
})