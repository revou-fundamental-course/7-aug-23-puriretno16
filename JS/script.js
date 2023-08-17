const inputField = document.getElementById("tinggi-input");
const button = document.getElementById("count-button")

inputField.addEventListener('input', function(){
    const inputValue = inputField.value

    if (inputValidation(inputValue)) {
        console.log("success")
        button.disabled = false
    } else {
        console.log("fail")
        button.disabled = true
    }

    output.innerHTML = 'Luas segitiga dari alas $(alas) cm dan tinggi $(tinggi)'
})
