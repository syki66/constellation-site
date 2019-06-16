for(var i = 1; i<6; i++){
  document.getElementById(i).style.display="none";
  document.getElementById("next_btn").style.display="none";
}

document.getElementById("answer_btn").style.display="none";

function start(){
  document.getElementById("1").style.display="block";
  document.getElementById("start_btn").style.display="none";
  document.getElementById("next_btn").style.display="block";


    var quiz1 = document.getElementsByName('quiz1');
    for(var j =0; j<4; j++){
      quiz1[j].checked = false;
    }

}


var cnt = 2;
var sum = 0;
function quiz_btn(){
    for(var i = 1; i<6; i++){
      document.getElementById(i).style.display="none";
    }

  for(var i = 1; i<6; i++){
    if (cnt == i){
      document.getElementById(i).style.display="block";
    }
  }



  var quiz1 = document.getElementsByName('quiz1');
  var quiz2 = document.getElementsByName('quiz2');
  var quiz3 = document.getElementsByName('quiz3');
  var quiz4 = document.getElementsByName('quiz4');
  var quiz5 = document.getElementsByName('quiz5');

/*
    if (quiz1[2].checked == true){
      alert("정답입니다."); sum+=1;
    } else if (quiz1[2].checked == false){
      alert("오답입니다.");
    } else if (quiz2[1].checked == true){
      alert("정답입니다."); sum+=1;
    } else if (quiz2[1].checked == false){
      alert("오답입니다.");
    } else if (quiz3[3].checked == true){
      alert("정답입니다."); sum+=1;
    }else if (quiz3[3].checked == false){
      alert("오답입니다.");
    }else if (quiz4[2].checked == true){
      alert("정답입니다."); sum+=1;
    }else if (quiz4[2].checked == false){
      alert("오답입니다.");
    }else if (quiz5[1].checked == true){
      alert("정답입니다."); sum+=1;
    }else if (quiz5[1].checked == false){
      alert("오답입니다.");
    }*/

    if (cnt == 2){
      if (quiz1[2].checked == true){
        alert("정답입니다."); sum+=1;
      }
      else if (quiz1[2].checked == false){
        alert("오답입니다.");
      }
    }

    else if (cnt == 3){
      if (quiz2[1].checked == true){
       alert("정답입니다."); sum+=1;
      } else if (quiz2[1].checked == false){
       alert("오답입니다.");
      }
    }

    else if (cnt == 4){
      if (quiz3[3].checked == true){
       alert("정답입니다."); sum+=1;
      }else if (quiz3[3].checked == false){
       alert("오답입니다.");
      }
    }

    else if (cnt == 5){
      if (quiz4[2].checked == true){
       alert("정답입니다."); sum+=1;
      }else if (quiz4[2].checked == false){
       alert("오답입니다.");
      }

    }

    else if (cnt == 6){
      if (quiz5[1].checked == true){
       alert("정답입니다."); sum+=1;
     }else if (quiz5[1].checked == false){
       alert("오답입니다.");
     }
      document.getElementById("answer_btn").style.display="block";
      document.getElementById("next_btn").style.display="none";
      document.getElementById("answer_btn").value="총 5문제중에"+sum+"문제 맞췄습니다. 축하드립니다!!";
    }

    else if (cnt == 7){

    }

    for(var i = 0; i<5; i++){
      quiz_a = ['quiz1', 'quiz2', 'quiz3', 'quiz4', 'quiz5']
      var quiz = document.getElementsByName(quiz_a[i]);
      for(var j =0; j<4; j++){
        quiz[j].checked = false;
      }

    }


  cnt+=1;
}
