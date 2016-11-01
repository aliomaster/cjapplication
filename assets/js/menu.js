const {remote} = require('electron');
const {Menu, MenuItem} = remote;

const menu = Menu.buildFromTemplate([
	{
		label: 'Инструменты',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'CmdOrCtrl+R',
				click (item, focusedWindow) {
					if (focusedWindow) focusedWindow.reload()
				}
			},
			{
				label: 'Toggle DevTools',
				accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
				click (item, focusedWindow) {
					if (focusedWindow) focusedWindow.webContents.toggleDevTools()
				}
			}
		],
	}
]);
Menu.setApplicationMenu(menu);