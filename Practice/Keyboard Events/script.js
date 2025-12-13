let input = document.getElementById("keyInput");
let output = document.getElementById("keyOutput");

input.addEventListener("keydown", (event) => {
    output.innerText = "Key pressed: " + event.key;
});
