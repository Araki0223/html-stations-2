function changeBackgroundColor() {
  const checkBox = document.getElementById("check");
  const text = document.getElementById("text");

  if(checkBox.checked){
    text.style.backgroundColor = "red";
  }else{
    text.style.backgroundColor = "white";
  }
}
