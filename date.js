var d = new Date();

var day = (d.getMonth())*30+d.getDate();

if (day>=79 & day<172){
  var spring = ['사냥개자리','게자리','사자자리','바다뱀자리','까마귀자리','목자자리','머리털자리','처녀자리','천칭자리']
  var result = Math.floor(Math.random() * 9 + 1);
  document.write(d.getFullYear()+"년 "+(d.getMonth()+1)+'월 '+(d.getDate())+"일. 현재 봄, 지금 하늘을 보면 "+spring[result-1]+"가 보입니다.");
} else if (day>=172 & day<265){
  var summer = ['헤라클레스 자리','전갈자리','뱀주인 자리','거문고 자리','독수리 자리','백조자리','방패자리','궁수자리']
  var result = Math.floor(Math.random() * 8 + 1);
  document.write(d.getFullYear()+"년 "+(d.getMonth()+1)+'월 '+(d.getDate())+"일. 현재 여름, 지금 하늘을 보면 "+summer[result-1]+"가 보입니다.");
} else if (day>=22 & day<78) {
  var winter = ['페르세우스 자리','마차부 자리','황소자리','오리온자리','쌍둥이자리','작은개자리','큰개자리','고물자리','용골자리']
  var result = Math.floor(Math.random() * 9 + 1);
  document.write(d.getFullYear()+"년 "+(d.getMonth()+1)+'월 '+(d.getDate())+"일. 현재 여름, 지금 하늘을 보면 "+winter[result-1]+"가 보입니다.");
} else{
  var autumn = ['염소자리','물병자리','남쪽물고기 자리','페가수스 자리','물고기자리','안드로메다 자리','삼각형 자리','양자리','고래자리']
  var result = Math.floor(Math.random() * 9 + 1);
  document.write(d.getFullYear()+"년 "+(d.getMonth()+1)+'월 '+(d.getDate())+"일. 현재 여름, 지금 하늘을 보면 "+autumn[result-1]+"가 보입니다.");
}
