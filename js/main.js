$(function(){
  $('.header-show').on('click', function(){
    // $('.header-none').toggleClass('none');
    if($('.header-none').is(':hidden') ){
      $('.header-none').slideDown(600);
      $('.header').css({'float':'center' });
    } else {
      $('.header-none').slideUp('slow');
      // $('.main').css({'position':'relative', 'top': '200px' });
    }
  })
});