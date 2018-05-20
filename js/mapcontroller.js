color = "8DD3C7";
grey = "D3D3D3";

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

function toggleColors() {
	if ( $( '#switcher' ).text() === 'Switch to gradient' ) {
		$( '#color1' ).val( '15534C' );
		$( '#color2' ).val( '297159' );
		$( '#color3' ).val( '498F60' );
		$( '#color4' ).val( '73AC61' );
		$( '#color5' ).val( 'A6C760' );
		$( '#color6' ).val( 'E2E062' );
		$( '#color7' ).val( 'FCE77C' );
		$( '.jscolor' ).each( function() {
			$( this ).focus();
			$( this ).blur();
		} );
		$( '#switcher' ).text( 'Switch to assortment' );
	} else {
		$( '#color1' ).val( '8DD3C7' );
		$( '#color2' ).val( 'B3DE69' );
		$( '#color3' ).val( 'BEBADA' );
		$( '#color4' ).val( 'FB8072' );
		$( '#color5' ).val( '80B1D3' );
		$( '#color6' ).val( 'FCCDE5' );
		$( '#color7' ).val( 'FDB462' );
		$( '.jscolor' ).each( function() {
			$( this ).focus();
			$( this ).blur();
		} );
		$( '#switcher' ).text( 'Switch to gradient' );
	}
}

function paintTerritory( territory ) {
	if ( $( 'input#territories' ).prop( 'checked' ) ) {
		if ( $( '#' + territory ).attr( "fill" ) === "#" + color ) {
			$( '#' + territory ).attr( "fill", "#" + grey );
			$('#' + territory + 'input').val( grey );
		} else {
			$( '#' + territory ).attr( "fill", "#" + color );
			$('#' + territory + 'input').val( color );
		}
	}
}

$(document).ready( function() {
	toggleTerritories();
	toggleColors();
	$( '.clickable' ).click( function() {
		// If the shape is already colored with the selected color, switch back to grey.
		if ( $( this ).attr( "fill" ) === "#" + color ) {
			$( this ).attr( "fill", "#" + grey );
			$( '#' + this.id + 'input' ).val( grey );
		// Otherwise, fill it with the selected color.
		} else {
			$( this ).attr( "fill", "#" + color );
			$( '#' + this.id + 'input' ).val( color );
		}
	} );
	// Set up click proxies for territories (since they're hard to click on)
	$( '#ASproxy' ).click( function() { paintTerritory( 'AS' ); } );
	$( '#GUproxy' ).click( function() { paintTerritory( 'GU' ); } );
	$( '#MPproxy' ).click( function() { paintTerritory( 'MP' ); } );
	$( '#PRproxy' ).click( function() { paintTerritory( 'PR' ); } );
	$( '#VIproxy' ).click( function() { paintTerritory( 'VI' ); } );
} );
