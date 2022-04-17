let password = document.getElementById("password")
let passwordValidate = document.getElementById("validate")
let validatebtn = document.getElementById("validate-btn")


validatebtn.addEventListener('click', () => {
    if (password.value.length < 8) {
        alert("Error: password has to be at least 8 characters long")
    }
    if (password.value != passwordValidate.value) {
        alert("Error: passwords enetered do not match")
    }
})