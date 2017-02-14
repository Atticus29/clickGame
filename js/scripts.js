$(document).ready(function() {
  $(".handleClickable").click(function() {
    $("#doorClosed").toggle();
    $("#handle").toggle();
    $("#doorOpen").toggle();
    $("#chair").toggle();
    $("#handleText").toggle();
    $("#initialText").toggle();
  });
  $(".chairClickable").click(function(){
    $("#doorOpen").toggle();
    $("#chair").toggle();
    $("#chairDown").toggle();
  })
});
