let kits = document.querySelectorAll(".kit")
let instLists = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"]

kits.forEach(kit => {
    kit.addEventListener("click", ()=>{
        let index = kit.getAttribute("instId")
        playSound(instLists[index])
    })
})
function playSound(e){
    currAud = new Audio(`sounds/${e}.wav`)
    currAud.pause()
    currAud.currentTime = 0
    currAud.play()
}