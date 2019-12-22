$(document).ready(function(){

  $(".Youtube, .text").css("color", "red");//стиль
  $(".Azazin, .number").css("fontSize", "45px");//дарю стиль
  $("input").attr("disabled", true);//формы в дизэйбл
  $("[href]").prepend("↗");//стрелочка
  $("[href]").attr("target", "_blank");//ссыли в нью виндоу

  //кнопка отмены
  $(".CanselButton").click(function() {
    $("[href]").each(function() {
        $(this).contents().eq(0).remove();
    });
    $("[href]").removeAttr("target");
    $(this).attr('disabled', true);
  });

  //замена на хттпс
  $("a").each(function() {
    if($(this).attr("href").indexOf("http:") != -1) {
    $(this).attr("href", $(this).attr("href").replace("http", "https"));
    }
  });

    //эффекты всякие
$('#b1').click(function(){
    $('#t1').hide('slow', function() {});
  });
  $('#b2').click(function(){
    $('#t2').fadeTo("fast", "0.5", function() {});
  });
  $('#b3').click(function(){
    $('#t3').slideToggle("slow", function() {});
  });
  $("#t4").hide();
  $('#b4').click(function(){
    $('#t4').show();
  });
  $('#b5').click(function(){
    $('#t5').animate({ fontSize: '30px' })
  });
})