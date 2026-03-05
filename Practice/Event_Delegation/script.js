let list = document.getElementById("list");
let msg = document.getElementById("msg");

list.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("active");
        msg.innerText = "You clicked: " + event.target.innerText;
    }

});
