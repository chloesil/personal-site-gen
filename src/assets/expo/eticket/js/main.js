//landing button
$(document).ready(function() {
    $("body").css({ overflow: 'hidden' });
});
$(".buy").click(function(){
	$(".landing").slideToggle(400);
	$("body").css({ overflow: 'inherit' });
});

//ticket pricing
$(".tickets").change(function() {
	var tickets = $(".tickets").val();
  	$(".cost").text(tickets*50);
});

//payment option
$(".payment span").click(function(){
	var clicked = $(this);
	var index = clicked.index();
	$(".payment span").removeClass("selected");
	clicked.addClass("selected");
	if (index == 0) {
		$(".creditcardinput").show();
		$(".accountinput").hide();
	} else {
		$(".accountinput").show();
		$(".creditcardinput").hide();
	}
});

//submit button
$(".submit").click(function(){
	$(".country, .fname, .lname, .phone, .email, .address").each(function() {
		if($(this).val() === ""){
			$(".error").fadeIn(200);
		} else {
			var tickets = $(".tickets").val();
			var fname = $(".fname").val();
			var lname = $(".lname").val();
			$(".ticketprice").text(tickets*50);
			$(".ticketcount").text(tickets);
			if (tickets == 1) {
				$(".plural").hide();
			}
			$(".ticketfname").text(fname);
			$(".ticketlname").text(lname);
			$(".loading").addClass("complete");
			setTimeout(function() {
		    	$.scrollTo($(".ticket"), 400, { axis:'x' });
		    	$(".loading").removeClass("complete");
			}, 400);
		}
	});	
});


