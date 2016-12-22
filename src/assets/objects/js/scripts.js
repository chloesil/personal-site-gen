// Load scripts after page loads
$(document).ready(function(){


	// Info Click function
	$('.shirt').click(function(){
		$('.shirt').fadeOut();
		$('.infoshirt').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.comic').click(function(){
		$('.comic').fadeOut();
		$('.infocomic').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.shirt2').click(function(){
		$('.shirt2').fadeOut();
		$('.infoshirt2').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.mug').click(function(){
		$('.mug').fadeOut();
		$('.infomug').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.almonds').click(function(){
		$('.almonds').fadeOut();
		$('.infoalmonds').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.lays').click(function(){
		$('.lays').fadeOut();
		$('.infolays').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.card').click(function(){
		$('.card').fadeOut();
		$('.infocard').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.immov').click(function(){
		$('.immov').fadeOut();
		$('.infoimmov').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.oyster').click(function(){
		$('.oyster').fadeOut();
		$('.infooyster').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.beans').click(function(){
		$('.beans').fadeOut();
		$('.infobeans').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.magnet').click(function(){
		$('.magnet').fadeOut();
		$('.infomagnet').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.cherry').click(function(){
		$('.cherry').fadeOut();
		$('.infocherry').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.hat').click(function(){
		$('.hat').fadeOut();
		$('.infohat').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.almonds2').click(function(){
		$('.almonds2').fadeOut();
		$('.infoalmonds2').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.soup').click(function(){
		$('.soup').fadeOut();
		$('.infosoup').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.oregon').click(function(){
		$('.oregon').fadeOut();
		$('.infooregon').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.men').click(function(){
		$('.men').fadeOut();
		$('.infomen').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.pin').click(function(){
		$('.pin').fadeOut();
		$('.infopin').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.head').click(function(){
		$('.head').fadeOut();
		$('.infohead').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});
	$('.mug2').click(function(){
		$('.mug2').fadeOut();
		$('.infomug2').fadeIn();
		$('.masterClose').fadeIn();
		return false;
	});

	// Change to zoom
	$('.zoom').click(function(){
		$('.stage').fadeOut();
		$('.zstage').fadeIn();
		return false;
	});

	// Change to info
	$('.info').click(function(){
		$('.zstage').fadeOut();
		$('.stage').fadeIn();
		return false;
	});

	// sidebar hide/show
	$('.clickarrow').click(function(){
		$('.side').fadeOut();
		$('.hide').fadeOut();
		$('.show').fadeIn();
		$(this).addClass('move');
	});

	$('.clickarrowtwo').click(function(){
		$('.side').fadeIn();
		$('.hide').fadeIn();
		$('.show').fadeOut();
		$(this).addClass('move');
	});

	// close
	$('.masterClose').click(function(){
		$('.infoshirt').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});
	$('.masterClose').click(function(){
		$('.infocomic').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infoshirt2').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infomug').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infoalmonds').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infolays').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infocard').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infoimmov').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infooyster').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infobeans').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infomagnet').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infocherry').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infohat').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infoalmonds2').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infosoup').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infooregon').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infomen').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infopin').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infohead').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infomug2').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});

	$('.masterClose').click(function(){
		$('.infohat').fadeOut();
		$('.masterClose').fadeOut();
		$('.item').fadeIn();
	});



	// filters
	$('.all-trigger').click(function(){
		$('.item').fadeIn();
		$('.filter').addClass('selected');
		return false;
	});

	// selected
	$('.filter').click(function(){
		$('.filter').removeClass('selected');
		$(this).addClass('selected');

	});


	});