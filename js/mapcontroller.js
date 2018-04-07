color = "#D3D3D3";

$(document).ready( function() {
	$('.clickable').click( function(){
		this.style.fill = color;
		$('#' + this.id + 'input').val( color );
	} );
} );
