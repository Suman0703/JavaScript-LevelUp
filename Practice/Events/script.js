let btn = document.getElementById("myBtn");
let output = document.getElementById("output");

btn.addEventListener("click", (event) => {
    output.innerText = "Event type: " + event.type;
});

let buttons = document.querySelectorAll(".btn");
let result = document.getElementById("result");

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        result.innerText = "You clicked: " + event.target.innerText;
    });
});
