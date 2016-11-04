const {remote} = require('electron');
const {BrowserWindow} = remote;
const win = BrowserWindow.getFocusedWindow();

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