$( document ).on( "pageinit", "#app-page", function() {
    
	$( document ).on( "swipeleft swiperight", "#app-page", function( e ) {
		if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swipeleft"  ) {
				$( "#right-panel" ).panel( "open" );
			} else if ( e.type === "swiperight" ) {
				$( "#left-panel" ).panel( "open" );
			}
		}
	});

	$( document ).on("mouseup", function(e) {

		var selection = window.getSelection();
		var selectionLength = selection.toString().length;
		var parent = selection.baseNode.parentElement.parentElement;
		var parentClasses = parent.className.split(" ");
		var isItTheText;
		$.each(parentClasses, function(index, value) {
			if (value == "text-orig" && selectionLength > 0) {
				$(".text-trans").slideDown();	
			} 
		})
	})
});
