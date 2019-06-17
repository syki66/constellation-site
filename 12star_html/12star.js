document.getElementById(0).style.display="block";
for(var i = 1; i<13; i++){
  document.getElementById(i).style.display="none";
}


function star12_select(){
  var mth = document.getElementById("month_btn").value*1;
  var day = document.getElementById("day_btn").value*1;
  var cal = [31,28,31,30,31,30,31,31,30,31,30,31];
  var star_cal = [30, 29, 31, 30, 32, 32, 31, 31, 30, 31, 29, 1000];
  var result = 0;
  var star_result = 21;

  for(var i = 0; i<mth-1; i++){
    result += cal[i];
  }
  result += day;

  for(var i=0; i<12; i++){
    star_result += star_cal[i];
    if(result < star_result & star_result <1000 & result > 20){
      for(var j = 0; j<13; j++){
        document.getElementById(j).style.display="none";
      }
      document.getElementById(i+1).style.display="block";
      break;
    }
    else{
      for(var j = 0; j<13; j++){
        document.getElementById(j).style.display="none";
      }
      document.getElementById(12).style.display="block";
    }
  }


}
