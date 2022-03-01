(function($) {

    $.fn.reCapture = function(options) {
		// default reCapture options
        var options = $.extend({
			reCapture: "#reCapture",
			submit: "button[type=submit]"
		}, options);
	
		var input = $(this).find(options.reCapture);
		var button = $(this).find(options.submit);
		
		// check if reCapture input exists.
		if (input) {
		    // add reCapture value in input
			$.fn.reCaptureAddValueInput(input);
			
			// reCapture value change for validation
			input.on("input", function(){
				if ($.fn.reCaptureValidate(this)) {
					// enable submit button
					button.attr("disabled", false);
				} else {
					// disable submit button
					button.attr("disabled", true);
				}
			});
			
			// disable form submit button
			button.attr("disabled", true);
		}
	};

	$.fn.random = function() {
		// generate random number from 1 to 9
		return Math.ceil(Math.random() * 9);
	};

	$.fn.reCaptureValue = function() {
		// generate reCapture value quation
		return $.fn.random() + "+" + $.fn.random() + "=";
	};

	$.fn.reCaptureAddValueInput = function(input) {
		// Add reCapture value as placeholder
		$(input).attr("placeholder", $.fn.reCaptureValue());
	};

	$.fn.reCaptureValidate = function(input) {
		var input = $(input);
		var value = input.val();
		// remove equals to sign for evaluation
		var reCapture = input.attr("placeholder").replace("=", "");
		// evaluate reCapture is equals into input value
		return eval(reCapture) == value;
	};
  
}(jQuery));
