const electron = require('electron');
const {app, BrowserWindow} = electron;
const mongoose = require('./libs/mongoose');
const argv = require('minimist')(process.argv.slice(2));

var win = null;

app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
	let winOpts = {
		height: height * .5,
		//titleBarStyle: 'hidden',
		//frame: false,
		//'resizable': false,
		//'kiosk': true,
	};
	if (process.platform === 'linux') {
		winOpts.icon = (`${__dirname}/assets/app-icon/png/128.png`);
	}
	if (argv.dev) {
		winOpts.width = 1300;
	} else {
		winOpts.width = width * .5;
	}

	win = new BrowserWindow(winOpts);
	win.loadURL(`file://${__dirname}/index.html`);
	if (argv.dev) {
		win.webContents.openDevTools();
	}
	win.on('closed', () => {
		win = null;
	});
});
