$("#search").focusin(function(){
    $(".input-box__placeholder > label").addClass("focus");
  });
  
  $("#search").focusout(function(){
    $(".input-box__placeholder > label").removeClass("focus");
  });
  
  
  let SliderBox1__i = 0;
  setInterval(function(){
    $('.slider-box-1').attr('data-index',SliderBox1__i++ % 6);
  }, 3000);