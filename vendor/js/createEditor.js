// MIT License

// Copyright (c) 2021 Egor Udovin

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


function createEditor(bgColor,fontColor)
{
	document.getElementById("XoheBB").innerHTML = "<div id='XoheBB-Tools'><item-box><a href='#' class='button-text' onclick='setFormat("+'"bold"'+");'>B</a><a href='#' class='button-text' onclick='setFormat("+'"italic"'+");'><i>I</i></a>"+
	"<a href='#' class='button-text' onclick='setFormat("+'"underline"'+");'><u>U</u></a><a href='#' class='button-text' onclick='setFormat("+'"strikethrough"'+");'><s>S</s></a></item-box>"+
	"<item-box><a href='#' class='button-text' onclick='setFormat("+'"justifyLeft"'+");'><img class='aling-img' src='https://github.com/xoheveras/XoheBB/blob/main/vendor/image/align-left.png?raw=true'></a>"+
	"<a href='#' class='button-text' onclick='setFormat("+'"justifyCenter"'+");'><img class='aling-img' src='https://github.com/xoheveras/XoheBB/blob/main/vendor/image/align-center.png?raw=true'></a>"+
	"<a href='#' class='button-text' onclick='setFormat("+'"justifyRight"'+");'><img class='aling-img' src='https://github.com/xoheveras/XoheBB/blob/main/vendor/image/align-right.png?raw=true'></a></item-box>"+
	"<item-box><a href='#' class='button-text' onclick='insertImg();'><img style='width: 20px;' src='https://github.com/xoheveras/XoheBB/blob/main/vendor/image/img.png?raw=true'></a>"+
	"<a href='#' class='button-text' onclick='insertUrl();'>URL</a><a href='#' class='button-text' onclick='insertFormatBlock('blockquote');'><img style='width: 20px; top: 1px;' src='https://github.com/xoheveras/XoheBB/blob/main/vendor/image/code.png?raw=true'></a></item-box>"+
	"<item-box><a href='#' class='button-text' onclick='insertFormatBlock("+'"h1"'+");'>h1</a><a href='#' class='button-text' onclick='insertFormatBlock("+'"h2"'+");'>h2</a>"+
	"<a href='#' class='button-text' onclick='insertFormatBlock("+'"h3"'+");'>h3</a><a href='#' class='button-text' onclick='insertFormatBlock("+'"p"'+");'>P</a></item-box>"+
	"</div><div id='XoheBB-Editor'contenteditable='true'>Этот текст может быть отредактирован пользователем</div>";
	document.getElementById("XoheBB").style.color = fontColor;
	document.getElementById("XoheBB").style.backgroundColor = bgColor;
}

function setSize(width, height)
{
	// Size Editor
	document.getElementById("XoheBB").style.width = width+4+"px";
	document.getElementById("XoheBB").style.height = height+33+"px";
	document.getElementById("XoheBB-Editor").style.width = width+"px";
	document.getElementById("XoheBB-Editor").style.height = height+"px";
	document.getElementById("XoheBB-Tools").style.width = width+4+"px";
	document.getElementById("XoheBB-Tools").style.height = "50px";
}

function setRadius(radius)
{
	document.getElementById("XoheBB").style.borderRadius = radius+"px";
}

function setBorder(style)
{
	document.getElementById("XoheBB").style.border = style;
}

function setShadow()
{
	document.getElementById("XoheBB").style.boxShadow = "0px 4px 17px rgba(0, 0, 0, 0.25)";
}


// Editor fuctions
function setFormat(key)
{
	document.execCommand(key, false, null);
}

function insertImg()
{
	var url = prompt('Введите адрес изображения', '');
	document.execCommand('insertImage', false, url);
}

function insertUrl()
{
	var url = prompt('Введите URL', '');
	document.execCommand('CreateLink', false, url);
}

function insertFormatBlock(block)
{
	document.execCommand('formatBlock', false, block);
}

function setFont(select)
{
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, select.value);
	document.execCommand('styleWithCSS', false, false);
}
