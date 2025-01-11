const header = document.getElementById("header");
console.log(header.textContent);

header.textContent = "Welcome to Advanced DOM Manipulation!";

header.innerHTML = "<span>Welcome to <strong>DOM</strong>!</span>";
console.log(header.textContent);
console.log(header.innerHTML);

const newElement = document.createElement("button");
newElement.textContent = "Click Me!";
document.body.appendChild(newElement);
