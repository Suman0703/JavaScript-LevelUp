let input = document.getElementById("item");
let btn = document.getElementById("addItem");
let list = document.getElementById("list");

btn.addEventListener("click", () => {

    let li = document.createElement("li");
    li.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }

});
