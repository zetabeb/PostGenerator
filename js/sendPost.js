//---------------Edit Panel Data---------------//
const sizeSelect = document.getElementById('sizeSelect');
const fontSelect = document.getElementById('fontSelect');
const btnColor = document.getElementById('btnColor');
const btnBold = document.getElementById('btnBold');
const btnItalics = document.getElementById('btnItalics');
const btnUnderline = document.getElementById('btnUnderline');
//-------------------Form Data----------------//
const txtArea = document.getElementById('txtArea');
const txtTitle = document.getElementById('txtTitle');
//--------------------Form Button---------------//
const btnSend = document.getElementById('btnSend');
const btnClean = document.getElementById('btnClean');
//----------------Vars Cursor Location------------//
let cursorTitle = 0;
let cursorTexArea = 0;
//---------Edit Button Booleans -- Title-------//
let isBoldTitle = false;
let isItalicsTitle = false;
let isUnderlineTitle = false;
//---------Edit Button Booleans -- Message Body-------//
let isBold = false;
let isItalics = false;
let isUnderline = false;
//----------------------Button Functions----------------------//
//=======Edit Panel=======//
btnColor.addEventListener('click', function () {
	MenuColor();
	event.preventDefault();
});
//Text BOLD
btnBold.addEventListener('click', function () {
	if(CheckCursorLocation()=='0') return;
	if(CheckCursorLocation()=='title'){
		if(isBoldTitle){
			RemoveClass(btnBold, 'active');
			txtTitle.style.fontWeight = "normal";
			isBoldTitle = false;
		}
		else{
			AddClass(btnBold, 'active');
			txtTitle.style.fontWeight = "bold";
			isBoldTitle = true;
		}
	}
	else if(CheckCursorLocation()=='bodyMessage'){
		if(isBold){
			RemoveClass(btnBold, 'active');
			txtArea.style.fontWeight = "normal";
			isBold = false;
		}
		else{
			AddClass(btnBold, 'active');
			txtArea.style.fontWeight = "bold";
			isBold = true;
		}
	}
	event.preventDefault();
});
//Text ITALICS
btnItalics.addEventListener('click', function () {
	if(CheckCursorLocation()=='0') return;

	if(CheckCursorLocation()=='title'){
		if(isItalicsTitle){
			RemoveClass(btnItalics, 'active');
			txtTitle.style.fontStyle = "normal";
			isItalicsTitle = false;
		}
		else{
			AddClass(btnItalics, 'active');
			txtTitle.style.fontStyle = "italic";
			isItalicsTitle = true;
		}
	}
	else if(CheckCursorLocation()=='bodyMessage'){
		if(isItalics){
			RemoveClass(btnItalics, 'active');
			txtArea.style.fontStyle = "normal";
			isItalics = false;
		}
		else{
			AddClass(btnItalics, 'active');
			txtArea.style.fontStyle = "italic";
			isItalics = true;
		}
	}
	event.preventDefault();
});
//Text UNDERLINE
btnUnderline.addEventListener('click', function () {
	if(CheckCursorLocation()=='0') return;

	if(CheckCursorLocation()=='title'){
		if(isUnderlineTitle){
			RemoveClass(btnUnderline, 'active');
			txtTitle.style.textDecoration = "none";
			isUnderlineTitle = false;
		}
		else{
			AddClass(btnUnderline, 'active');
			txtTitle.style.textDecoration = "underline";
			isUnderlineTitle = true;
		}
	}
	else if(CheckCursorLocation()=='bodyMessage'){
		if(isUnderline){
			RemoveClass(btnUnderline, 'active');
			txtArea.style.textDecoration = "none";
			isUnderline = false;
		}
		else{
			AddClass(btnUnderline, 'active');
			txtArea.style.textDecoration = "underline";
			isUnderline = true;
		}
	}
	event.preventDefault();
});
//=======Method Buttons=======//
btnSend.addEventListener('click', function () {
	event.preventDefault();
});
btnClean.addEventListener('click', function () {
	txtTitle.value = "";
	txtArea.value = "";
	event.preventDefault();	
});
//------------------Cursor Location------------------//
txtTitle.addEventListener('click', function() {
	cursorTexArea = 0;
	cursorTitle = 1;
	//BOLD
	if(isBoldTitle){
		AddClass(btnBold, 'active');
	}else{
		RemoveClass(btnBold, 'active');
	}
	//ITALICS
	if(isItalicsTitle){
		AddClass(btnItalics, 'active');
	}else{
		RemoveClass(btnItalics, 'active');
	}
	//UNDERLINE
	if(isUnderlineTitle){
		AddClass(btnUnderline, 'active');
	}else{
		RemoveClass(btnUnderline, 'active');
	}
});
txtArea.addEventListener('click', function() {
	cursorTexArea = 1;
	cursorTitle = 0;
	//BOLD
	if(isBold){
		AddClass(btnBold, 'active');
	}else{
		RemoveClass(btnBold, 'active');
	}
	//ITALICS
	if(isItalics){
		AddClass(btnItalics, 'active');
	}else{
		RemoveClass(btnItalics, 'active');
	}
	//UNDERLINE
	if(isUnderline){
		AddClass(btnUnderline, 'active');
	}else{
		RemoveClass(btnUnderline, 'active');
	}
});
//---------To check where the cursor is----------//
function CheckCursorLocation  (){
	let cursorLocation;
	if(cursorTitle == 1)
	{	//The cursor is on the title
		return cursorLocation = 'title';	
	}
	else if(cursorTexArea == 1)
	{	//The cursor is on the Message Body
		return cursorLocation = 'bodyMessage';
	}
	else
	{	//The cursor is nowhere
		return cursorLocation = '0';
	}
}

function MenuColor(cl){

}
function SetColor(cl){
	if(CheckCursorLocation()=='0') return;
	if(CheckCursorLocation()=='title'){
		
	}
	else if(CheckCursorLocation()=='bodyMessage'){
		
	}
}
function AddClass(obj, cls){
	if(!existeClase(obj, cls))	obj.className+=cls;
}
function RemoveClass(obj, cls){
	if(existeClase(obj, cls))	obj.className = obj.className.replace(cls, '');
}
function existeClase(obj,cls) {
 	return obj.className.match(new RegExp('(\s|^)'+cls+'(\s|$)'));
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