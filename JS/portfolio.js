
  let userName = prompt("Please enter your username", "LetMeIn");
  let passWord = prompt("Please enter your password", "Okfine");
  if (userName && passWord != null){
    document.getElementById("open").innerHTML =
    location.href = "projects.html";
  }
