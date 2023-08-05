let btnn = document.getElementById("btn");
let psw = document.getElementById("password");
let confPaw = document.getElementById("conf-password");

btnn.addEventListener("click", myfun);
let flag = 1;
function myfun() {


if (psw.value == "" && confPaw.value == "") {
    btnn.style.backgroundColor = "#3498db";
  }  
  
  
else if (psw.value === confPaw.value) {
    btnn.style.backgroundColor = "green";
    document.getElementById("pra").innerHTML = "Password Matched";
  } 
  
else {
    btnn.style.backgroundColor = "red";
    document.getElementById("pra").innerHTML = "Password didn't Match";
  }
}
