var rank = 1;

function drawNext() {
  var lastdraw = document.getElementById("luckyperson");
  var alllucky = document.getElementById("drawhistory");
  alllucky.innerHTML = lastdraw.innerHTML + '<br />' + alllucky.innerHTML;
  var randomnumber = Math.floor(Math.random() * data.length);
  var luckynumber = data[randomnumber];
  lastdraw.innerHTML = '#' + rank + ' ' + luckynumber;
  rank += 1;
  data.splice(randomnumber,1);
  if (data.length == 0) {
    document.getElementById("btnDraw").disabled = true;
  }
}
