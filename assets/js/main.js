//const $ = jQuery = require('jquery');
const {remote} = require('electron');
const {BrowserWindow} = remote;
const win = BrowserWindow.getFocusedWindow();
//require('jquery-ui');
/*require([ "jquery", "jquery-ui/datepicker" ], function( $ ) {
    $( "<input>" )
        .appendTo( "body" )
        .datepicker();
});*/

var actions = document.getElementById('js-actions');

actions.addEventListener('click', function (e) {
	let target = e.target;
	if (target.id == 'close-window-button') {
		win.close();
	}
	if (target.id == 'minimize-window-button') {
		win.minimize();
	}
	if (target.id == 'maximize-window-button') {
		win.maximize();
	}
});

/*var select = $( "#edit-switcher" );

var slider = $( "<div id='switcher'></div>" ).insertAfter( select ).slider({
	min: 1,
	max: 2,
	range: "min",
	value: select[ 0 ].selectedIndex + 1,
	slide: function( event, ui ) {
		select[ 0 ].selectedIndex = ui.value - 1;
	}
});
$( "#edit-switcher" ).change(function() {
	slider.slider( "value", this.selectedIndex + 1 );
});*/