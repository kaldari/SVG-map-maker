<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );

// Generate new map data
if ( isset( $_POST["territories"] ) && $_POST["territories"] ) {
	$map = file_get_contents( "Blank USA w territories.svg" );
} else {
	$map = file_get_contents( "Blank USA states only.svg" );
}
if ( $map ) {
	foreach( $_POST["states"] as $state => $fill ) {
		$map = str_replace( 'id="' . $state . '" fill="#D3D3D3"', 'id="' . $state . '" fill="#' . strtoupper( $fill ) . '"', $map );
	}
} else {
	echo "Error: Could not open template file.";
}

// Output new SVG map
header('Content-type: image/svg+xml');
header('Content-Description: File Transfer');
header('Content-Disposition: attachment; filename="US map.svg"');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');

print( $map );
flush();
exit;
