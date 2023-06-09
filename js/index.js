import { switchTheme } from "./switchTheme.js"
import { copyToClipboard } from "./copyToClipboard.js"
import calculate from "./calculate.js"

const input = document.getElementById("input")
const resultInput = document.getElementById("result")

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.addEventListener("keydown", function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === "Backspace"){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter"){
       calculate()
    }
})

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener("click", function (){
    input.value = ""
})


document.getElementById("equal").addEventListener("click", calculate)

document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
