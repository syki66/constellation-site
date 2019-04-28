function lucky_change(){


  var result = Math.floor(Math.random() * 3 + 1);
  var lucky_3 = ['1th_lucky.html', '2th_lucky.html', '3th_lucky.html']

  document.location.href = lucky_3[result-1];

}
