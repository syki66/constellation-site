function lucky_change(){
  for(var i = 1; i<37; i++){
    document.getElementById(i).style.display="none";
  }

  var l = document.getElementById("lucky");
  var num = Math.floor(Math.random() * 3);
  var num12 = num*12
  for(var i = 1; i<13; i++){
    if (l.options[l.selectedIndex].value == i){
      document.getElementById(i+num12).style.display="block";
    }
  }

}
