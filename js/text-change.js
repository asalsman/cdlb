$(function() {
  var fontCounter = 0;
  var fontDirection = 1;

  function incrementCounter(){
    if (fontDirection == 1) {
      fontCounter++;
    } else if (fontDirection == 0) {
      fontCounter--;
    };
    if (fontCounter >= 4) {
      fontDirection = 0;
    } else if (fontCounter <= 0) {
      fontDirection = 1;
    };
  };

  $("#size-changer").click(function() {
    incrementCounter();
    $('.article-body section').children('p').each(function() {
      var size = parseInt($(this).css("font-size"));
      console.log(size)
      if (fontDirection == 1) {
        size = size + 2 + "px";
      } else if (fontDirection == 0) {
        size = size - 2 + "px";
      };

      $(this).css({
        'font-size': size
      });
    });
  });

});
