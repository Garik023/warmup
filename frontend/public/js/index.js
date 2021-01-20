const api_url = "http://localhost:3000/";

//Render List
var options = {
  valueNames: ["name", "city"],
  item: '<li><h3 class="name"></h3><p class="city"></p></li>',
};

var values = [
  { name: "Jonny", city: "Stockholm" },
  { name: "Jonas", city: "Berlin" },
];

var hackerList = new List("hacker-list", options, values);

// Fetch from api

const button = document.getElementById("get-data");

button.addEventListener("click", (event) => {
  fetch(`${api_url}users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
