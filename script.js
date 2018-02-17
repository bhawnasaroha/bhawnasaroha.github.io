jQuery(document).ready(function(){
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
      $("nav").addClass('secondary');
    } else if($("nav").hasClass('secondary')){
      $("nav").removeClass('secondary');
    }
  });
});
