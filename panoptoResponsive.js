window.onresize = reloadPanopto;
window.onload = reloadPanopto;

function reloadPanopto(){
	var Panopto = document.getElementsByClassName("panopto");
	console.log(Panopto[0]);
	if(Panopto[0]){
		var URL = document.getElementsByClassName("panopto")[0].getAttribute("src");
		Panopto[0].setAttribute("src",URL);
		var TEST = document.getElementsByClassName("videoContainer")[0].clientWidth;
		document.getElementsByClassName("videoContainer")[0].style.height = (TEST * (2/3)) + "px";
		var TESTEL = document.getElementById("player");
		}
		/*document.getElementById("player").style.height = (TEST * (2/3)) + "px";
		document.getElementById("player").style.width = TEST;*/
}
function opPanopto(){
	document.getElementsByClassName("panopto")[0].style.opacity = 0;
		var interVal = setInterval(function(){
		var TEST2 = document.getElementsByClassName("panopto")[0].style.opacity;
		if(TEST2 > 1){
		clearInterval(interVal);
		}else{
		TEST2 = (TEST2 * 1) + 0.01;
		document.getElementsByClassName("panopto")[0].style.opacity = TEST2;
		}
	},50);
}
function setTime(t){
	var video = document.getElementById("vid1");
	video.scrollIntoView();
	video.currentTime = t;
	video.play();
}