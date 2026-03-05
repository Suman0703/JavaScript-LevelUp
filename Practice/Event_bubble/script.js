// Child → Parent → Body → Document

let box = document.getElementById("box");
let insideBtn = document.getElementById("insideBtn");

box.addEventListener("click", () => {
    console.log("Box clicked");
});

insideBtn.addEventListener("click", () => {
    console.log("Button clicked");
});
