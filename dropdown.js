var I = 0;
function JStest(){
	var ELEMENT = parent.document.getElementById("o_main_center");
	var ELEMENT2 = parent.document.getElementsByClassName("o_tools o_tools_center list-inline");
	var CONTENTTOOLBOX = ELEMENT2[0].innerHTML;
	var HTMLCONTENT = ELEMENT.innerHTML;
	var CODE = "<div id=\"chubaka\" class=\"flex\"><div class=\"DropDown\"><a href=\"javascript:parent.gotonode(93699320980173)\"><button class=\"dropbtn\"><h3>Einf&uuml;hrung</h3></button></a><div class=\"dropdown-content\" style=\"left:0;\"><a href=\"javascript:parent.gotonode(93699321074319)\"><h4>Einf&uuml;hrungsvideo</h4></a><a href=\"javascript:parent.gotonode(93699321072314)\"><h4>Prof. Dr. Feldmann</h4></a><a href=\"javascript:parent.gotonode(93699321077223)\"><h4>Kursablauf</h4></a></div></div><div class=\"DropDown\"><a href=\"javascript:parent.gotonode(93710403232714)\"><button class=\"dropbtn\"><h3>Organisation</h3></button></a><div class=\"dropdown-content\" style=\"left:0;\"><a href=\"javascript:parent.gotonode(93699322855967)\"><h4>Teilnehmerliste</h4></a><a href=\"javascript:parent.gotonode(93699322856504)\"><h4>Kalender</h4></a><a href=\"javascript:parent.gotonode(93699322854589)\"><h4>Forum</h4></a><a href=\"javascript:parent.gotonode(93699322856319)\"><h4>Kontaktformular</h4></a></div></div><div class=\"DropDown\"><a href=\"javascript:parent.gotonode(93710403236263)\"><button class=\"dropbtn\"><h3>Inhalt</h3></button></a><div class=\"dropdown-content\" style=\"left:0;\"><a href=\"javascript:parent.gotonode(93699321010403)\"><h4>Grundlagen des Controllings</h4></a><a href=\"javascript:parent.gotonode(93699321013685)\"><h4>Aufgaben des Controllings</h4></a><a href=\"javascript:parent.gotonode(93699321014809)\"><h4>Strategische und operative Instrumente</h4></a><a href=\"javascript:parent.gotonode(93699321015508)\"><h4>Fallstudie</h4></a></div></div></div>";
	var CODE2 = "<a href=\"http://www.work-and-study.info/\" target=\"_blank\"><i id=\"newBtn\" class=\'o_icon o_icon-fw o_icon_noclick\'></i><span></span></a>";
	var SCRIPT = "<script src=\"https://rawgit.com/sebarbour/was/master/JStest.js\" type=\"text/javascript\"></script><script src=\"https://rawgit.com/sebarbour/was/master/dropdown.js\"></script>";
	ELEMENT.innerHTML = CODE + SCRIPT + HTMLCONTENT;
	ELEMENT2[0].innerHTML = CONTENTTOOLBOX + CODE2;
}

var TEST = parent.document.getElementById("o_main_center").innerHTML.search("chubaka");
if(TEST==-1){
	JStest();
}

function mainLeft(){
	var MENULEFT = parent.document.getElementsByTagName("UL");
	var VALUE;
	console.log(MENULEFT);
	for (var i = 0; MENULEFT.length > i; i++){
		var CLASSNAME = MENULEFT[i].getAttribute("class");
		if(CLASSNAME == " o_tree_11"){
			console.log(MENULEFT[i]);
		}
	}
}

function insertScript(){
	var HEADSCRIPT = parent.document.querySelectorAll("head > script");
	var LENGTH = HEADSCRIPT.length;
	var A = LENGTH - 1;
	var MYSCRIPT = HEADSCRIPT[A];
	var MYSCRIPTSRC = MYSCRIPT.getAttribute("src");
	console.log(MYSCRIPTSRC);
	if (MYSCRIPTSRC != "https://rawgit.com/sebarbour/was/master/dropdown.js"){
		var SCRIPT1 = parent.document.createElement("script");
		SCRIPT1.setAttribute("src","https://rawgit.com/sebarbour/was/master/dropdown.js");
		console.log(SCRIPT1);
		parent.document.getElementsByTagName("head")[0].appendChild(SCRIPT1);
	}
}
insertScript();
