// EcmaScript - 2015 ES6 MODULES
// default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { elements } from "./elements.js"
import Events from "./events.js"

const {
    buttonPause,
    buttonStop,
    buttonPlay,
    buttonSet,
    minutesDisplay,
    secondsDisplay
} = elements

// DOM - Document Object Model

// refatoracao: mudar um codigo para deixa mais entendivel
// deixar o codigo mais perfomatico
// SEM ALTERAR suas funcionalidades

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset,
})

const sounds = Sounds()

// Event-driven
// programacao imperativa
// callback

Events({controls, timer, sounds})
