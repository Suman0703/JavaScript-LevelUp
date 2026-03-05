let form = document.getElementById("userForm");
let output = document.getElementById("output");

let users = JSON.parse(localStorage.getItem("users")) || [];
renderUsers(); // show stored users on page load

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userData = {
    "name": document.getElementById("name").value,
    "age": document.getElementById("age").value,
    "city": document.getElementById("city").value
  };

  // clear inputs
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";

  users.push(userData); // add to array
  localStorage.setItem("users", JSON.stringify(users));

  renderUsers(); 
});

function renderUsers() {
  output.innerHTML = "";

  users.forEach((user, index) => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
      <p>City: ${user.city}</p>
      <button onclick="deleteUser(${index})">Delete</button>
    `;

    output.appendChild(div);
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}
