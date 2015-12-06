
$(document).ready(function() {

/* js is connected 
function myFunction() {
    alert("Hello!");
}
myFunction();
*/


//.addClass()

	$("#prep").click(advance);

	function advance(){ 
		$("li#prep").css("color", "purple");
		$("li#prep").css("list-style-image", "url(images/icons/pie-left-bottom.png)")
		}


	


//flyout dashboard window on right

	$("#checklist-banner").mouseenter(goOrange);
	$("#checklist-banner").mouseleave(goGrey);

	function goGrey(){
			$("#checklist-banner").css("background-color", "#888");
		}
	function goOrange(){
			$("#checklist-banner").css("background-color", "orange");
		}



	$("#checklist-banner").click(showList); 

		function showList(){
			$("#right-column-layer1").fadeToggle("fast","linear");
			$("#right-column-flyout").fadeToggle("fast","linear");
		}


	$("#slider").slick();


/*


$("#checklist-banner").click(titleList); 

	function titleList(){
		$("#checklist-banner-a").html("Back to Content &#8673;");
}


$("#checklist-banner").click(changeHTML); 
	if (html == "My List &#8675;"){
		$("#checklist-banner-a").html("Back to Content &#8673;");
	}
	else() {
		$("#checklist-banner-a").html("My List &#8675;");
	}


$("#checklist-banner:last").click(showContent); 
	function showContent(){
		$("#checklist-banner-a").html("My List &#8675;");
	}

.on("click", function (d){
           if(toggleSelected == true) {
               d3.select("#i" + d.inn).classed("selected", true);
               toggleSelected = false;
           } else {
               d3.select("#i" + d.inn).classed("deselected", true);
               toggleSelected = true;
           } 
});

*/


//end doc ready 
}); 