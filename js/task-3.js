const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
 
textInput.addEventListener("input", (event) => {
    if (textInput.value.trim() !== "") {
        output.textContent = event.currentTarget.value.trim()
    } else output.textContent = "Anonymous";
    });
