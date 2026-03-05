let btn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

btn.addEventListener("click",async function loadUsers() {

    usersDiv.innerHTML = "Loading...";
    
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    showUsers(data);
  } catch (error) {
    usersDiv.innerHTML = "Something went wrong!";
  }
}
);

function showUsers(users) {
  usersDiv.innerHTML = "";

  users.forEach(user => {
    usersDiv.innerHTML += `
      <div>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
}