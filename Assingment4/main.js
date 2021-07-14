$(document).ready(function() {
  
  
  $("#showGame").click(showGame);
  $("#showparent").click(showparent);
  
  function showGame() {
    $('.mainContent').hide()
    $('.project').hide();
    $('#game').show();
  }
  
  function showparent() {
    $('.mainContent').hide()
    $('.project').hide();
    $('#parent').show();
  }
});