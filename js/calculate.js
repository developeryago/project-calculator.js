function calculate(){
    const resultInput = document.getElementById("result")
    const input = document.getElementById("input")
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}

export default calculate