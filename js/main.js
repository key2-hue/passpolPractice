$(function(){
  $('.header-show').on('click', function(){
    // $('.header-none').toggleClass('none');
    if($('.header-none').hasClass('none')){
      $('.header-none').removeClass('none').addClass('show');
    }
  })
});