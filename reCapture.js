(function($) {

    $.fn.reCapture = function(options) {
		// default reCapture options
        var options = $.extend({
			reCapture: "#reCapture",
			submit: "button[type=submit]"
		}, options);
	
		// find reCapture input in form
		var input = $(this).find(options.reCapture);
		// find form submit button
		var button = $(this).find(options.submit);
		
		// check if reCapture input exists.
		if (input) {
			// disable form submit button
			button.attr("disabled", true);
			
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

	$.fn.reCaptureEval = function(input) {
		// remove equals to sign and evalaute the sum
		return eval($(input).attr("placeholder").replace("=", ""));
	};

	$.fn.reCaptureValidate = function(input) {
		// check if reCapture evaluation is equal to input value
		return $.fn.reCaptureEval(input) == $(input).val();
	};
  
}(jQuery));
