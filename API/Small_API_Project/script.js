let btn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

btn.addEventListener("click", loadUsers);

async function loadUsers() {
  usersDiv.innerHTML = "Loading users...";

  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    let users = await response.json();
    displayUsers(users);

  } catch (error) {
    usersDiv.innerHTML = "Failed to load users";
  }
}

function displayUsers(users) {
  usersDiv.innerHTML = "";

  users.forEach(user => {
    usersDiv.innerHTML += `
      <div class="card">
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>City:</b> ${user.address.city}</p>
        <p><b>Company:</b> ${user.company.name}</p>
      </div>
    `;
  });
}
