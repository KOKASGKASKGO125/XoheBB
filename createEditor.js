
function createEditor()
{
	document.getElementById("XoheBB").innerHTML = "<div id='XoheBB-Tools'>Tools<div><textarea id='XoheBB-Editor'></textarea>"
}

function setSize(width, height)
{
	document.getElementById("XoheBB").style.width = width+4+"px";
	document.getElementById("XoheBB").style.height = height+25+"px";
	document.getElementById("XoheBB-Editor").style.width = width+"px";
	document.getElementById("XoheBB-Editor").style.height = height+"px";
	document.getElementById("XoheBB-Tools").style.width = width+4+"px";
	document.getElementById("XoheBB-Tools").style.height = "50px";
}