const copyToClipboard = (ev) => {
    const btn = ev.currentTarget
    const resultInput = document.getElementById("result")
    if (btn.innerText === "Copy"){
        btn.classList.add("success")
        btn.innerText = "Copied!"
        navigator.clipboard.writeText(resultInput.value)
    } else{
        btn.innerText = "Copy"
        btn.classList.remove("success")
    }
}

export {copyToClipboard}