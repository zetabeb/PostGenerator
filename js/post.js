const post = document.getElementById('post');

post.innerHTML = IframeHTML("/post/post.html", 100, 100);

//Función que incluye Templates html
function IframeHTML (text, width, height){
	let postHtml = '<iframe src="'+text+'" frameborder="0" width="'+width+'%" style="margin: 0px; height: 100%; position: absolute;"></iframe>';
	return postHtml;
}
function IframeHTMLPX (text, width, height){
	let postHtml = '<iframe src="'+text+'" frameborder="0" width="'+width+'px" style="margin: 0px; height: 100%; position: absolute;"></iframe>';
	return postHtml;
}