
document.write('<input type="button" class="btn" value="Получить данные с тестовой страницы"> </input>');
$(".btn").click(function(){
  $(".aj").load( "https://inxaoc.github.io/example/ajax-1.html");
  });


document.write('<input type="button" class="btn1" value="JSON"> </input>');
$(".btn1").click(function(){
  $("div.aj1").load( "https://inxaoc.github.io/example/ajax.json", onComplete);
  });
function onComplete(){
	var json = $("div.aj1").html();
	$("div.aj1").html("");
	var text = "";
	for (var i = 0; i < json.length; i++) {
		if (json[i] == '{' || json[i] == '[') {
			text += "<ul><li>";
		} else if (json[i] == '}' || json[i] == ']') {
			text += "</ul></ul>";
		} else if (json[i] == ',') {
			text += "</li><li>";
		} else if (json[i] == '"') {
			if (json[i-1] == '{') {
				text += "<li>";
			} else if (json[i+1] == '}') {
				text += "</li>";
			}
		} else text +=json[i];
	}
	$("div.aj1").append(text)
}