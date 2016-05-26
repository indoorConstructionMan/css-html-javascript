function clicker(){
  var check = document.getElementById("button");
  console.log(check.value);
  if (check.value == "+") {
      check.value = "0";
  } else {
      check.value = "+";
  }
}
