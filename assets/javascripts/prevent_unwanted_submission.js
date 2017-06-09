$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

var submit = false;
$('form').submit(function () {
    if (submit) { return false; }
    submit = true;
});