let btn = document.getElementById("btn");
let input1 = document.getElementById("email");
let input2 = document.getElementById("username");
let input3 = document.getElementById("password");

function press() {
  input1.style.border = "2px solid blue";
  input1.style.transition = "border 0.5s ease";
  input2.style.border = "2px solid blue";
  input2.style.transition = "border 0.5s ease";
  input3.style.border = "2px solid blue";
  input3.style.transition = "border 0.5s ease";
  btn.style.backgroundColor = "green";
  btn.style.transition = "background-color 0.5s ease";
  console.log(input1.value);
  console.log(input2.value);
  console.log(input3.value);
}
