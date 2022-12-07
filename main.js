let boom = document.querySelector(".boom")
let clap = document.querySelector(".clap")
let hihat = document.querySelector(".hihat")
let kick = document.querySelector(".kick")
let openhat = document.querySelector(".openhat")
let ride = document.querySelector(".ride")
let snare = document.querySelector(".snare")
let tink = document.querySelector(".tink")
let tom = document.querySelector(".tom")

let boomSfx = new Audio("boom.wav")
let clapSfx = new Audio("clap.wav")
let hihatSfx = new Audio("hihat.wav")
let kickSfx = new Audio("kick.wav")
let openhatSfx = new Audio("openhat.wav")
let rideSfx = new Audio("ride.wav")
let snareSfx = new Audio("snare.wav")
let tinkSfx = new Audio("tink.wav")
let tomSfx = new Audio("tom.wav")

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