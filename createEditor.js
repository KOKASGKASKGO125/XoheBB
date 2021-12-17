
function createEditor()
{
	document.getElementById("XoheBB").innerHTML = "<div id='XoheBB-Tools'><button>H</button><button><b>B</b>"+
	"</button><button><i>I</i></button><button><s>S</s></button><div><textarea id='XoheBB-Editor'></textarea>";
}

function setSize(width, height)
{
	document.getElementById("XoheBB").style.width = width+4+"px";
	document.getElementById("XoheBB").style.height = height+33+"px";
	document.getElementById("XoheBB-Editor").style.width = width+"px";
	document.getElementById("XoheBB-Editor").style.height = height+"px";
	document.getElementById("XoheBB-Tools").style.width = width+4+"px";
	document.getElementById("XoheBB-Tools").style.height = "50px";
}