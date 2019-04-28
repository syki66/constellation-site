function star12_select(){
  var s = document.getElementById("star12");
  var s12 = ['1th_star.html','2th_star.html','3th_star.html','4th_star.html','5th_star.html','6th_star.html','7th_star.html','8th_star.html','9th_star.html','10th_star.html','11th_star.html','12th_star.html','all_star.html']
  for(var i = 0; i<s12.length; i++){
    if (s.options[s.selectedIndex].value == i){
      document.location.href = s12[i-1];
    }
  }

}
