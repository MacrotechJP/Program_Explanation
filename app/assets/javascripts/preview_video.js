$(function(){
  $("#pre").on("click",function(){
    $(this).parent().find("video").show();
  })
  $(document).on('click',   function(e) {
    if (!$(e.target).closest('#pre').length) {
      $("video").hide();
      var video = $('video').get(0);
      video.currentTime = 0
    }
  });
})