var normalizeListingHeights = function() {
	if ($("a.thumbnail").length>0) {
		var maxHeight = 0;
		$("a.thumbnail").each(function(){ 
			$(this).css("height", "auto");
		});
		$("a.thumbnail").each(function(){ 
			if ($(this).height()>maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$("a.thumbnail").each(function(){ 
			if (maxHeight>0) {
				$(this).css("height", maxHeight+"px");
			}
		});
	}	
};

$(document).ready(function() {
	normalizeListingHeights();
	setTimeout(function(){
		normalizeListingHeights();
	},500);
	window.onresize = function() {
	    normalizeListingHeights();
	};

	$("a[data-toggle='tooltip']").tooltip();
    $('.star-styles').raty();
});

