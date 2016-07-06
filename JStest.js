function forumHide(){
var FORUM = parent.document.getElementById("o_c1318029145");
console.log(FORUM);
}
function findForum(){
	
}

	var EVENTLNR = parent.document.getElementById("chubaka");
	console.log(EVENTLNR);
(function checkChubaka(){	
	if(EVENTLNR){
		EVENTLNR.addEventListener("click", function(){
		console.log("Event fired");
		});
		console.log("Event listener added");
		return; 
	}else{
		setTimeout(checkChubaka,100);
	}
)();

