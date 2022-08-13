import {elements} from "./elements.js"

const {
    buttonPause,
    buttonStop,
    buttonPlay,
    buttonSet,
    buttonVolumeOn,
    buttonVolumeOff,
} = elements

export default function Events({
    controls,
    timer,
    sounds
}){

    buttonPlay.addEventListener('click', ()=>{
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })

    buttonPause.addEventListener('click', ()=>{
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })

    
    buttonStop.addEventListener('click', ()=>{
        controls.reset()
        timer.reset()
        sounds.pressButton()
    })

    
    buttonVolumeOff.addEventListener('click', ()=>{
        buttonVolumeOff.classList.add('hide')
        buttonVolumeOn.classList.remove('hide')
        sounds.bgAudio.play()
    })
    
    buttonVolumeOn.addEventListener('click', ()=>{
        buttonVolumeOn.classList.add('hide')
        buttonVolumeOff.classList.remove('hide')
        sounds.bgAudio.pause()
    })

    
    buttonSet.addEventListener('click', ()=>{
        let newMinutes = controls.getMinutes()
        if(!newMinutes){
            timer.reset()
            return
        }
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

}
