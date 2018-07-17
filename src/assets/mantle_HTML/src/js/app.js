let $ = require('jquery');
window.jQuery = $;
window.$ = $;

require('./modules/search-overlay');
require('./modules/video-modal');
require('./vendor/fitVids');

// Select Replacement (Select2)
require('./vendor/selectwoo');
$('select').selectWoo({
		width: 'auto',
		minimumResultsForSearch: -1
	}
);

// Fitvids
$('body').fitVids();





// Main nav accessibility
$( document ).ready( function( $ ) {
	$( '.header-nav' ).on( 'mouseenter focus', '.has-children > a', function( e ) {
		var el = $( this );
		el.toggleClass( 'has-focus' );
		// Show sub-menu
		el.parents( '.menu-item' ).attr( 'aria-expanded', 'true' );
	}).on( 'mouseleave blur', '.has-children > a', function( e ) {
		var el = $( this );
		el.toggleClass( 'has-focus' );
		// Only hide sub-menu after a short delay, so links get a chance to catch focus from tabbing
		setTimeout( function() {
			if ( el.siblings( '.sub-menu' ).attr( 'data-has-focus' ) !== 'true' ) {
				el.parents( '.menu-item' ).attr( 'aria-expanded', 'false' );
			}
		}, 100 );
	}).on( 'mouseenter focusin', '.sub-menu', function( e ) {
		var el = $( this );
		el.attr( 'data-has-focus', 'true' );
	}).on( 'mouseleave focusout', '.sub-menu', function( e ) {
		var el = $( this );
		setTimeout( function() {
			// Check if anything else has picked up focus (i.e. next link in sub-menu)
			if ( el.find( ':focus' ).length === 0 ) {
				el.attr( 'data-has-focus', 'false' );
				// Hide sub-menu on the way out if parent link doesn't have focus now
				if ( el.siblings( 'a.has-focus' ).length === 0 ) {
					el.parents( 'li' ).attr( 'aria-expanded', 'false' );
				}
			}
		}, 100 );
	});
});
