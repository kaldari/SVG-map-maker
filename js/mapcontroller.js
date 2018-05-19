color = "8DD3C7";

function toggleTerritories() {
	if ( $( 'input#territories' ).prop( 'checked' ) ) {
		$( '.territory' ).show();
		// Add titles as a tooltip for hover
		$( '#ASproxy' ).attr( 'title', 'American Samoa' );
		$( '#GUproxy' ).attr( 'title', 'Guam' );
		$( '#MPproxy' ).attr( 'title', 'Northern Mariana Islands' );
		$( '#PRproxy' ).attr( 'title', 'Puerto Rico' );
		$( '#VIproxy' ).attr( 'title', 'U.S. Virgin Islands' );
	} else {
		$( '.territory' ).hide();
		// Remove titles as a tooltip for hover
		$( '#ASproxy' ).removeAttr( 'title' );
		$( '#GUproxy' ).removeAttr( 'title' );
		$( '#MPproxy' ).removeAttr( 'title' );
		$( '#PRproxy' ).removeAttr( 'title' );
		$( '#VIproxy' ).removeAttr( 'title' );
	}
}

function paintTerritory( territory ) {
	if ( $( 'input#territories' ).prop( 'checked' ) ) {
		$( '#' + territory ).attr( "fill", "#" + color );
		$('#' + territory + 'input').val( color );
	}
}

$(document).ready( function() {
	toggleTerritories();
	$( '.clickable' ).click( function() {
		$( this ).attr( "fill", "#" + color );
		$( '#' + this.id + 'input' ).val( color );
	} );
	// Set up click proxies for territories (since they're hard to click on)
	$( '#ASproxy' ).click( function() { paintTerritory( 'AS' ); } );
	$( '#GUproxy' ).click( function() { paintTerritory( 'GU' ); } );
	$( '#MPproxy' ).click( function() { paintTerritory( 'MP' ); } );
	$( '#PRproxy' ).click( function() { paintTerritory( 'PR' ); } );
	$( '#VIproxy' ).click( function() { paintTerritory( 'VI' ); } );
} );
