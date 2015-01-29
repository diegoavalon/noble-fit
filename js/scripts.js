$(function()	{
	$("#results-section").hide();
	$("#loader").hide();

	$("#sizingSocks").submit(function(event) {
		$("#sizing-section").hide();
		$("#loader").show();
		$("#loader").delay(5000).fadeOut();

		// var shoeSizeInput = $("select#shoeSize").val();
		// var gender = $("input[name='optionsGender']:checked").val();
		

		$("#results-section").delay(5500).fadeIn(1000);


		$(".size").append("medium append");

		event.preventDefault();
		
	});


	$("#sizingGloves").submit(function(event) {
		$("#sizing-section").hide();
		$("#loader").show();
		$("#loader").delay(5000).fadeOut();

		// var shoeSizeInput = $("select#shoeSize").val();
		// var gender = $("input[name='optionsGender']:checked").val();
		

		$("#results-section").delay(5500).fadeIn(1000);


		$(".size").append("medium append");

		event.preventDefault();
		
	});


	$("#sizingBelts").submit(function(event) {
		$("#sizing-section").hide();
		$("#loader").show();
		$("#loader").delay(5000).fadeOut();

		// var shoeSizeInput = $("select#shoeSize").val();
		// var gender = $("input[name='optionsGender']:checked").val();
		

		$("#results-section").delay(5500).fadeIn(1000);


		$(".size").append("medium append");

		event.preventDefault();
		
	});


	$("#sizingBreeches").submit(function(event) {
		$("#sizing-section").hide();
		$("#loader").show();
		$("#loader").delay(5000).fadeOut();

		// var shoeSizeInput = $("select#shoeSize").val();
		// var gender = $("input[name='optionsGender']:checked").val();
		

		$("#results-section").delay(5500).fadeIn(1000);


		$(".size").append("medium append");

		event.preventDefault();
		
	});


	$("#sizingTops").submit(function(event) {
		$("#sizing-section").hide();
		$("#loader").show();
		$("#loader").delay(5000).fadeOut();

		// var shoeSizeInput = $("select#shoeSize").val();
		// var gender = $("input[name='optionsGender']:checked").val();
		

		$("#results-section").delay(5500).fadeIn(1000);


		$(".size").append("medium append");

		event.preventDefault();
		
	});

});