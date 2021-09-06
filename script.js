document.getElementById("id1").addEventListener("click", di);

function di() {
  document.getElementById("id1").style.color='White';
  document.getElementById("id1").innerHTML ="Sent";
  document.getElementById("id1").style.backgroundColor = "#064DDE";
  
}


document.getElementById("id2").addEventListener("click", dis);

function dis() {
  document.getElementById("id2").style.color='White';
  document.getElementById("id2").innerHTML ="Subscribed";
  document.getElementById("id2").style.backgroundColor = "#CC0000";
  
}



document.getElementById("id3").addEventListener("click", disp);

function disp() {
  document.getElementById("id3").style.color='White';
  document.getElementById("id3").innerHTML ="Unfollow";
  document.getElementById("id3").style.backgroundColor = "#DA7700";
  
}