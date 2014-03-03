<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );

function createPNG( $svgfile, $pngfile ) {
	$command = "rsvg " . $svgfile . " " . $pngfile;
	$make_map = system( $command, $retval );
	if ( $retval ) echo "PNG creation failed."; // Did it work?
}

$stateArray = array();
// Add dot in front of each state to make it a CSS class selector
foreach ( $_POST['states'] as $state ) {
	$stateArray[] = '.' . $state;
}
// Make array into a string consisting of a list of states
$stateList = implode( ', ', $stateArray );

// Generate new map data
$map = file_get_contents( "USA-map.svg" );
if ( $_POST['states'] ) {
	$newdata = preg_replace( '/\.filled {/i', '.filled, ' . $stateList . ' {', $map );
}

// Write the new map to a file
/*
$fh = fopen( "newmap.svg", "w" );
fwrite( $fh, $newdata );
fclose( $fh );
*/

//createPNG( 'newmap.svg', 'newmap.png' );

// Output new SVG map
header( 'Content-type: image/svg+xml' );
print( $newdata );
flush();
