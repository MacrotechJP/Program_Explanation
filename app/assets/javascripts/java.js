$(function(){
  var pos = 0;
  var header = $('#Java_header');
  
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos || $(this).scrollTop() < 300){
      //上スクロール時の処理
      header.fadeIn();
    }else{
      //下スクロール時の処理
      header.fadeOut();
    }
    pos = $(this).scrollTop();
  });
});