$('a.trigger-menu').click(function(){
  if($('#nav-menu').attr('show') == '1'){
    $('#nav-menu').animate({'opacity':'0', 'height':'0px'}, function(){
      $(this).hide().attr('show', '').css({'opacity':'1', 'height':'234px'});
    });
  }
  else{
    $('#nav-menu').css({'opacity':'0', 'height':'0px'}).show().animate({'opacity':'1','height':'234px'}).attr('show','1');
  }
});

$('.option-custom').click(function(){
    $('.select-custom').find('span').text($(this).text());
    $('.options-custom').collapse('hide');
});
$('.custom-checkbox').click(function(){
  if($(this).attr('class').match('custom-uncheckbox')){
      $(this).removeClass('custom-uncheckbox');
  }
  else{
    $(this).addClass('custom-uncheckbox');
  }
});

// demos

$('.button-htp').click(function(){
  var to_elem=$('#htp');
  $('body, html').animate({
    scrollTop: to_elem.offset().top
  }, 500);
    
    return 1;
});

$( document ).ready(function() {
    $('ul.menu li:nth-child(1)').find('a').attr('href', 'index.html');
    $('ul.menu li:nth-child(2)').find('a').attr('href', 'donate.html');
    $('ul.menu li:nth-child(3)').find('a').attr('href', 'monitoring.html');
    $('ul.menu li:nth-child(4)').find('a').attr('href', 'map.html');
    $('ul.menu li:nth-child(5)').find('a').attr('href', 'auth.html');
    $('.enter-border-enter').find('a').attr('href', 'auth.html');
});

