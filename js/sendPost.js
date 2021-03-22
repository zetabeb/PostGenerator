const sizeSelect = document.getElementById('sizeSelect');
const fontSelect = document.getElementById('fontSelect');
const btnColor = document.getElementById('btnColor');
const btnBold = document.getElementById('btnBold');
const btnItalics = document.getElementById('btnItalics');
const btnUnderline = document.getElementById('btnUnderline');

const txtArea = document.getElementById('txtArea');
const txtTitle = document.getElementById('txtTitle');

const btnSend = document.getElementById('btnSend');
const btnClean = document.getElementById('btnClean');

let cursorTitle = 0;
let cursorTexArea = 0;
let isBold = false;
let isItalics = false;
let isUnderline = false;

btnColor.addEventListener('click', function () {
	buttonFunction('btnColor');
	event.preventDefault();
});
btnBold.addEventListener('click', function () {
	buttonFunction('btnBold');
	event.preventDefault();
});
btnItalics.addEventListener('click', function () {
	buttonFunction('btnItalics');
	event.preventDefault();
});
btnUnderline.addEventListener('click', function () {
	buttonFunction('btnUnderline');
	event.preventDefault();
});
btnSend.addEventListener('click', function () {
	event.preventDefault();
});
btnClean.addEventListener('click', function () {
	txtTitle.value = "";
	txtArea.value = "";
	event.preventDefault();	
});
txtTitle.addEventListener('click', function() {
	cursorTexArea = 0;
	cursorTitle = 1;
});
txtArea.addEventListener('click', function() {
	cursorTexArea = 1;
	cursorTitle = 0;
});
function buttonFunction(button){
	if(CheckCursorLocation()==0){
		return;
	}
	else if(CheckCursorLocation()==1){
		switch(button){
			case 'btnColor':
				MenuColor(1);
			break;
			case 'btnBold':
				SetBold(1);
			break;
			case 'btnItalics':
				SetItalics(1);
			break;
			case 'btnUnderline':
				SetUnderline(1);
			break;
		}		
	}
	else if(CheckCursorLocation()==2){
		switch(button){
			case 'btnColor':
				MenuColor(2);
			break;
			case 'btnBold':
				SetBold(2);
			break;
			case 'btnItalics':
				SetItalics(2);
			break;
			case 'btnUnderline':
				SetUnderline(2);
			break;
		}
	}
}
function CheckCursorLocation  (){
	let cursorLocation;
	if(cursorTitle == 1){
		return cursorLocation = 1;	
	}
	else if(cursorTexArea == 1){
		return cursorLocation = 2;
	}else{
		return cursorLocation = 0;
	}
}
function MenuColor(cl){

}
function SetColor(cl){
	if(cl==1){

	}
	else{

	}
}
function SetBold(cl){

	if(cl==1){
		if(isBold){
			alert("adiós mundo");
			txtTitle.fontWeight = "normal";
			isBold = false;
		}
		else{
			alert("hola mundo");
			txtTitle.fontWeight = "bold";
			isBold = true;
		}
	}
	else{
		if(isBold){
			txtArea.fontWeight = "normal";
			isBold = false;
		}
		else{
			txtArea.fontWeight = "bold";
			isBold = true;
		}
	}
}
function SetItalics(cl){
	if(cl==1){

	}
	else{

	}
}
function SetUnderline(cl){
	if(cl==1){

	}
	else{

	}
}

document.addEventListener('DOMContentLoaded', function (event) {
	//alert("hola mundo");
});


/*
var lengthEditor = editor.text().length;
var range = window.getSelection().getRangeAt(0);
var pRange = range.cloneRange();
pRange.selectNodeContents(editor.get(0));
var start = pRange.setEnd(range.startContainer, range.startOffset).toString().length;
if(start == lengthEditor) {
 //do something 
}
*/
/*
var collectObjects = function (request, cb) { 
	var objects = [] request.onsuccess = function (event) {
		if (!event.target.result) return cb(null, objects); 
		cursor = event.target.result; 
		objects.push(cursor.value);
		cursor.continue() ;
	} 
	request.onerror = function (event) { 
		cb(event.target.error);
	}
}
*/