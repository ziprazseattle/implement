
$(document).ready(function() {

/* TEST - js is connected! 
function myFunction() {
    alert("Hello!");
}
myFunction();
*/




//THINGS TO EMPLOY 
//.addClass()
// .before()
//.hide()





/* PIE CHARTS - PREVIOUS WORKING CODE  

$("#prep").click(advance);

	function advance(){ 
		$("li#prep").css("color", "purple");
		$("li#prep").css("list-style-image", "url(images/icons/pie-right.png)");
}

*/

// PIE CHARTS - REPLACED WITH ONE TIME CLICK 

	$("#prep").one( "click", function() { 
  		$("li#prep").css("color", "purple");
		$("li#prep").css("list-style-image", "url(images/icons/pie-left.png)");

	});


	$("#delivery").one( "click", function() { 
  		$("li#delivery").css("color", "purple");
		$("li#delivery").css("list-style-image", "url(images/icons/pie-3-4-bottom-left.png)");

	});

	$("#effect").one( "click", function() { 
  		$("li#effect").css("color", "purple");
		$("li#effect").css("list-style-image", "url(images/icons/pie-full.png)");

	});

	$( "#effect" ).on( "click", function( event ) {
	  alert( "Training is complete! Congratulations" );
	  $( this ).off( event );
	});





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
			$("#checklist-banner-a").html("Back to Content &#8673;");
		}






/* TEXT REPLACEMENT ON RIGHT COL CHECKLIST BANNER 

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

LAST APPROACH 

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











/*

IF ELSE RANDOMNESS

		var image = $("li#prep").css("list-style-image", "url(images/icons/pie-right.png)").val(); 

		if (.css("list-style-image")) == ("url(images/icons/pie-right.png)") {
			$("li#prep").css("list-style-image", "url(images/icons/pie-3-4-bottom-right.png)");
		}




		if (.css("list-style-image")) == ("url(images/icons/pie-right.png)")
			{
				$("li#prep").css("list-style-image", "url(images/icons/pie-3-4-bottom-right.png)");
			}

	
		 	else if ($("li#prep")).is("list-style-image", "url(images/icons/pie-3-4-bottom-right.png)")
			{
				$("li#prep").css("list-style-image", "url(images/icons/pie-full.png)");
			}



		if () {

		}






// FOR SLIDER	$("#slider").slick();

*/


//end doc ready 
}); 