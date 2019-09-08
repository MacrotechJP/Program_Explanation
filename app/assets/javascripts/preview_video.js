$(function(){
  $("#pre").on("click",function(){
    var video = $('video').get(0);
    video.currentTime = 0
    $(this).parent().find("video").show();
  })
  $(document).on('click',function(e) {
    if (!$(e.target).closest('#pre').length) {
      $("video").hide();
    }
  });
})