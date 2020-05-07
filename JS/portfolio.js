
  let userName = prompt("Please enter your username", "LetMeIn");
  let passWord = prompt("Please enter your password", "Okfine");
  if (userName && passWord != null){
    document.getElementById("open").innerHTML =
    window.open('projects.html', '_self');
  }
