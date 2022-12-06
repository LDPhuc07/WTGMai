$(window).on('load', function(event) {
      $('.preLoading').delay(1000).fadeOut(400);

});
$( ".answer" ).click(function() {
    $('.content').fadeOut(100, function(){
        $(".question-love").show();
    });
});
$( ".say-yes" ).click(function() {
    $(".content-say-yes").show();
});

$(function TronTranh(){
      $(".say-no").on({
          mouseover:function(){
              $(this).css({
                  left:(Math.random()*70)+"%",
                  top:(Math.random()*70)+"%",
              });
          }
      });
});
$('.say-no').bind('touchstart', function(){
      $(this).css({
        left:(Math.random()*90)+"%",
        top:(Math.random()*90)+"%"
    });
})
setTimeout($( ".say-no" ).click(function() {
    $(".content-say-no").show();
}), 100000);
$( ".close" ).click(function() {
    $(".content-say-yes, .content-say-no").hide();
});

function playSad() {
    var audio_happy = document.getElementById("audio-happy");
    audio_happy.pause();
    audio_happy.currentTime = 0;
    var audio_sad = document.getElementById("audio-sad");
    audio_sad.currentTime = 1;
    audio_sad.play();
}
function playHappy() {
    var audio_happy = document.getElementById("audio-happy");
    audio_happy.currentTime = 7;
    audio_happy.play();
    var audio_sad = document.getElementById("audio-sad");
    audio_sad.pause();
    audio_sad.currentTime = 0;
}