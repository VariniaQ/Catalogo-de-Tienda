function getUserName(){
  let user = "root";
  let userName = document.getElementById("form2Example17").value;

  let psw = "12345";
  let userPsw = document.getElementById("form2Example27").value;

  if (user == userName && psw == userPsw){
    window.location.href = "shop.html";
    document.getElementById("form2Example27").value = "";
    document.getElementById("form2Example17").value = "";
  } else{
    alert("Los datos no son correctos");
    document.getElementById("form2Example27").value = "";
    document.getElementById("form2Example17").value = "";
  }
}


