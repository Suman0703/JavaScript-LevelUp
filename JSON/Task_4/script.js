let form = document.getElementById("userForm");
let output = document.getElementById("output");
let clearBtn = document.getElementById("clearAll");

// load from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];
renderUsers();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let roll = document.getElementById("roll").value.trim();
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let city = document.getElementById("city").value.trim();

  // validation
  if (!roll || !name || !age || !city) {
    alert("All fields are required!");
    return;
  }

//   .some() = CHECK

// It checks each item in an array and answers one question:

let rollExists = users.some(user => user.roll === roll);

if (rollExists) {
  alert("Roll number already exists!");
  return;
}


  let userData = {
    roll,
    name,
    age,
    city
  };

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  // clear inputs
  form.reset();

  renderUsers();
});

function renderUsers() {
  output.innerHTML = "";

  users.forEach((user, index) => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <p><strong>Roll:</strong> ${user.roll}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>City:</strong> ${user.city}</p>
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

// 🧹 Clear all
clearBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete all students?")) {
    localStorage.clear();
    users = [];
    renderUsers();
  }
});
