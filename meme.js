/* 
  Whenever the user lets up on their keyboard while typing inside of an input
    text box, the meme generator will update
*/
$(document).ready(function() {
  $("#top-text").keyup(function() {
    $("#top-caption").html($("#top-text").val());
  });
});
$(document).ready(function() {
  $("#bottom-text").keyup(function() {
    $("#bottom-caption").html($("#bottom-text").val());
  });
});

/* Functionality for the Enter button */
$(document).ready(function() {
  $("#submit").click(function() {
    $("#img1").attr("src", $("#image-url").val());
    $(".meme").css("color", $("#text-color").val());
  });
});

/* Code to move the image around */
$(document).ready(function() {
  $(document).keyup(function(event) {
    if (event.which == 37) {
      $("#memeImg").animate({
        left: '-=50px'
      });
    }
    else if (event.which == 39) {
      $("#memeImg").animate({
        left: '+=50px'
      });
    }
    else if (event.which == 38) {
      $("#memeImg").animate({
        top: '-=50px'
      });
    }
    else if (event.which == 40) {
      $("#memeImg").animate({
        top: '+=50px'
      });
    }
  });
});