let text = document.getElementById("text")
let btn = document.getElementById("btn")
let textareas = document.querySelectorAll("textarea")

btn.addEventListener('click', () => {
    console.log(textareas[0].value)
    text.style.border = "thick solid"
    text.style.borderColor = `rgb(${textareas[0].value},${textareas[1].value},${textareas[2].value})`
    text.style.width = `${textareas[3].value}px`

    text.style.backgroundColor = `rgb(${textareas[4].value},${textareas[5].value},${textareas[6].value})`
})