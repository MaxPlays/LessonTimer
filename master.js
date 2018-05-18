//var a = prompt("Enter end time").trim().split("-");
var before = null;
var to = null;

if(a.length == 1){
  before = new Date();
  to = new Date(before.getFullYear(), before.getMonth(), before.getDate(), a[0].split(":")[0], a[0].split(":")[1]).getTime() - before.getTime();
}else{
  var b = new Date();
  before = new Date(b.getFullYear(), b.getMonth(), b.getDate(), a[0].split(":")[0], a[0].split(":")[1]);
  to = new Date(before.getFullYear(), before.getMonth(), before.getDate(), a[1].split(":")[0], a[1].split(":")[1]).getTime() - before.getTime();
}

window.setInterval(function(){
  var v = ((new Date().getTime() - before.getTime()) / to) * 100;

  document.getElementsByClassName("inner")[0].style.width = v + "%";
  if(document.getElementById("c").checked){
    document.getElementsByClassName("inner")[0].style.background = getRandomColour();
  }
  document.getElementsByClassName("inner")[0].innerHTML = Math.round(v, 2) + "%";
}, 100);

function getRandomColour() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getInfo(){
  var d = new Date();
  var h = d.getHour();
  var m = d.getMinute();

  if(h == 7 && m >= 45){

  }else if(h == 8 && m < 50){

  }else if(h == 8 && m < 55){

  }else if((h == 8 && m <= 59) | (h == 9 && m < 45)){

  }else if(h == 9 && m <= 59){
    
  }
}
