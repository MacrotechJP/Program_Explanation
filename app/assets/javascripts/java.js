//スクロール時ヘッダー表示変化
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

//ヘッダー項目変化
$(function(){
  $(".menu-item.first label").on("click",function(){
    if ($('.menu-item.second').css('display') == 'block') {
      $(".menu-item.second").hide();
      $(".menu-item.third").hide();
      $(".menu-item.four").hide();
      $(".menu-item.five").hide();
      $(".menu-item.six").hide();
      $(".menu-item.first .detail").fadeIn();
      $(".menu-item.first .detail").css({"display": "inline-flex"});
    } else {
      $(".menu-item.first .detail").hide();
      $(".menu-item.second").show();
      $(".menu-item.third").show();
      $(".menu-item.four").show();
      $(".menu-item.five").show();
      $(".menu-item.six").show();
    }
  })
  $(".menu-item.second label").on("click",function(){
    if ($('.menu-item.first').css('display') == 'block') {
      $(".menu-item.first").hide();
      $(".menu-item.third").hide();
      $(".menu-item.four").hide();
      $(".menu-item.five").hide();
      $(".menu-item.six").hide();
      $(".menu-item.second").css({"transform": "translate3d(110px, 0, 0)"});
      $(".menu-item.second .detail").fadeIn();
      $(".menu-item.second .detail").css({"display": "inline-flex"});
    } else {
      $(".menu-item.second .detail").hide();
      $(".menu-item.second").css({"transform": "translate3d(220px, 0, 0)"});
      $(".menu-item.first").show();
      $(".menu-item.third").show();
      $(".menu-item.four").show();
      $(".menu-item.five").show();
      $(".menu-item.six").show();
      }
  })
  $(".menu-item.third label").on("click",function(){
    if ($('.menu-item.first').css('display') == 'block') {
      $(".menu-item.first").hide();
      $(".menu-item.second").hide();
      $(".menu-item.four").hide();
      $(".menu-item.five").hide();
      $(".menu-item.six").hide();
      $(".menu-item.third").css({"transform": "translate3d(110px, 0, 0)"});
      $(".menu-item.third .detail").fadeIn();
      $(".menu-item.third .detail").css({"display": "inline-flex"});
    } else {
      $(".menu-item.third .detail").hide();
      $(".menu-item.third").css({"transform": "translate3d(330px, 0, 0)"});
      $(".menu-item.first").show();
      $(".menu-item.second").show();
      $(".menu-item.four").show();
      $(".menu-item.five").show();
      $(".menu-item.six").show();
      }
  })
  $(".menu-item.four label").on("click",function(){
    if ($('.menu-item.first').css('display') == 'block') {
      $(".menu-item.first").hide();
      $(".menu-item.second").hide();
      $(".menu-item.third").hide();
      $(".menu-item.five").hide();
      $(".menu-item.six").hide();
      $(".menu-item.four").css({"transform": "translate3d(110px, 0, 0)"});
      $(".menu-item.four .detail").fadeIn();
      $(".menu-item.four .detail").css({"display": "inline-flex"});
    } else {
      $(".menu-item.four .detail").hide();
      $(".menu-item.four").css({"transform": "translate3d(440px, 0, 0)"});
      $(".menu-item.first").show();
      $(".menu-item.second").show();
      $(".menu-item.third").show();
      $(".menu-item.five").show();
      $(".menu-item.six").show();
      }
  })
  $(".menu-item.five label").on("click",function(){
    if ($('.menu-item.first').css('display') == 'block') {
      $(".menu-item.first").hide();
      $(".menu-item.second").hide();
      $(".menu-item.third").hide();
      $(".menu-item.four").hide();
      $(".menu-item.six").hide();
      $(".menu-item.five").css({"transform": "translate3d(110px, 0, 0)"});
      $(".menu-item.five .detail").fadeIn();
      $(".menu-item.five .detail").css({"display": "inline-flex"});
    } else {
      $(".menu-item.five .detail").hide();
      $(".menu-item.five").css({"transform": "translate3d(550px, 0, 0)"});
      $(".menu-item.first").show();
      $(".menu-item.second").show();
      $(".menu-item.third").show();
      $(".menu-item.four").show();
      $(".menu-item.six").show();
      }
  })
  $(".menu-open-button").on("click",function(){
    $(".menu-item.first .detail").hide();
    $(".menu-item.second .detail").hide();
    $(".menu-item.third .detail").hide();
    $(".menu-item.four .detail").hide();
    $(".menu-item.five .detail").hide();
    if ($("#menu-open").prop("checked") == true) {
      $(".menu-item.second").css({"transform": "translate3d(0, 0, 0)"});
      $(".menu-item.third").css({"transform": "translate3d(0, 0, 0)"});
      $(".menu-item.four").css({"transform": "translate3d(0, 0, 0)"});
      $(".menu-item.five").css({"transform": "translate3d(0, 0, 0)"});
      $(".menu-item.six").css({"transform": "translate3d(0, 0, 0)"});
    }else{
      $(".menu-item.first").show();
      $(".menu-item.second").css({"transform": "translate3d(220px, 0, 0)","transition-duration": "290ms"});
      $(".menu-item.second").show();
      $(".menu-item.third").css({"transform": "translate3d(330px, 0, 0)","transition-duration": "390ms"});
      $(".menu-item.third").show();
      $(".menu-item.four").css({"transform": "translate3d(440px, 0, 0)","transition-duration": "490ms"});
      $(".menu-item.four").show();
      $(".menu-item.five").css({"transform": "translate3d(550px, 0, 0)","transition-duration": "590ms"});
      $(".menu-item.five").show();
      $(".menu-item.six").css({"transform": "translate3d(660px, 0, 0)","transition-duration": "690ms"});
      $(".menu-item.six").show();
    }
  })
});