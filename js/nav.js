$(document).ready(function(){
  $('.nav').click(function(){
    $("span").slideToggle(50, 'linear');
  });
});

$(document).ready(function(){
  $('.eva-corner').click(function(){
    $("span").slideUp(50, 'linear');
  });
});

$(document).ready(function() {
  $('.content').on('click', function() {
    var target = $(this).data('target');

    $('.main').not(target).fadeOut(100);
    $('#container').not(target).fadeOut(100);
    $(target).fadeIn(100);
  });
});
