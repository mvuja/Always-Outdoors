$('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.nav-links').toggleClass('open')
  });


$('.nav-links li').on('click', () => {
    $('.nav-links').removeClass('open')
    $('.hamburger').toggleClass('open')
})