function click_btn(){
  for(var i = 1; i<7; i++){
    document.getElementById(i).style.display="none";
  }

  var sel = document.getElementById("search_btn").value;
  var sel_array = ['까마귀자리', '작은곰자리', '오리온자리', '백조자리', '안드로메다자리', '페가수스자리'];

  for(var i = 1; i<7; i++){
    if (sel == sel_array[i-1]){
      document.getElementById(i).style.display="block";
    }
  }


}
