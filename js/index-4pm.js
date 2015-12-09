
$(document).ready(function() {

/* TEST - js is connected! 
function myFunction() {
    alert("Hello!");
}
myFunction();
*/




// OTHER THINGS TO TRY 
// .addClass()
// .before()
// .hide()



/* PREPEND WORKING, REPEATS 

	$(".before").hover(first);

	 	function first() {
		$(".before").prepend( "<p>First complete the Reinforce chapter</p>" );
		}
*/

// PREPEND/APPEND CLICK ONLY ONCE WORKING

	$( ".before" ).one( "click", function() {
		  $(".before").prepend( "<strong>Wait! First complete the 'Teach It' section.<br></strong>" );
	});


	$( ".after" ).one( "click", function() {
		  $(".after").append( "<p style='font-weight:bold;margin-top:0px;padding-top:0px;'>You've completed this chapter. Nice Work!</p>" );
	});






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

/*	$( "#effect" ).one( "click", function( event ) {
		 alert( "Training is complete. Congratulations!" );
		 $( this ).off( event );
	});
*/





// SHOW HIDE 

// hides all content on page load 
			$("#maze-instruction-text, #maze-topics-text").hide();
			
			$( "#maze-instructions" ).click(function() {
				$("#maze-instruction-text").slideToggle("slow");
			});

			$( "#maze-topics" ).click(function() {
				$("#maze-topics-text").slideToggle("slow");
			});





// MOUSE IMAGE  

	$( "#mouse" ).click(function() {
  		$( "#up" ).focus();

	});





// MAZE ANIMATION 

	 $("#up").click( function() {
		 	$("#mouse").animate({ top:"-=5px"}, "fast", "swing");
		 
	});
	
	
	 $("#down").click( function() {
	 	$("#mouse").animate({ top:"+=5px"}, "fast", "swing");
	 
	});
	
		 $("#right").click( function() {
	 	$("#mouse").animate({ left:"-=5px"}, "fast", "swing");
	 
	});
	
	
	 $("#left").click( function() {
	 	$("#mouse").animate({ left:"+=5px"}, "fast", "swing");
	 
	});



// ANSWER HIDE/SHOW

// hides all content on page load 
			$("#answer-text").hide();
			
			$( "#answer" ).click(function() {
				$("#answer-text").slideToggle("slow");
			});







// FLYOUT DASHBOARD WINDOW - RIGHT COL

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
			var $bannerLinkText = $("#checklist-banner-a");
			var bannerContent = $bannerLinkText.text();
			$("#right-column-layer1").fadeToggle("slow","linear");
			$("#right-column-flyout").fadeToggle("slow","linear");
			console.log(bannerContent);
			if (bannerContent === "Back to Content")
			{
				$bannerLinkText.text("View My List");
			} 
			else  {
				$bannerLinkText.text("Back to Content");
			}
		}



/* IF ELSE SYNTAX
			if (condition){action to take} 
			else if (condition){action to take} 
			else {other action to take}
*/


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