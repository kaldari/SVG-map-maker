color = "#D3D3D3";

function toggleTerritories() {
	if ( $( 'input#territories' ).prop( 'checked' ) ) {
		$( '.territory' ).show();
	} else {
		$( '.territory' ).hide();
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
