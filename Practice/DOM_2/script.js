let input = document.getElementById("pass");
let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {

    let type = input.getAttribute("type");

    if (type === "password") {
        input.setAttribute("type", "text");
        btn.innerText = "Hide";
    } else {
        input.setAttribute("type", "password");
        btn.innerText = "Show";
    }

});
