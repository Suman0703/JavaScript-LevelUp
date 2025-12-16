let btn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

btn.addEventListener("click", function () {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      showUsers(data);
    });

});

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
