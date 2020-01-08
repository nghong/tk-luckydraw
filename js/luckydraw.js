function drawNext() {
  var lastdraw = $("#luckyperson").html();
  var alllucky = $("#drawhistory").html();
  $("#drawhistory").html(lastdraw + '<br />' + alllucky);
  var randomnumber = Math.floor(Math.random() * data.length);
  var luckynumber = data[randomnumber];
  $("#luckyperson").html(luckynumber);
  data.splice(randomnumber,1);
  if (data.length == 0) {
    $("#btnDraw").prop('disabled', true);
  }
}
