const post = document.getElementById('post');

post.innerHTML = IframeHTML("post.html", 100, 100);

//Función que incluye Templates html
function IframeHTML (text, width, height){
	var postHtml = '<iframe src="'+text+'" frameborder="0" width="'+width+'%" height="'+height+'%" style="margin: 0px;"></iframe>'
	return postHtml;
}
function IframeHTMLPX (text, width, height){
	var postHtml = '<iframe src="'+text+'" frameborder="0" width="'+width+'px" height="'+height+'px" style="margin: 0px;"></iframe>'
	return postHtml;
}