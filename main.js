const {app, BrowserWindow, ipcMain} = require('electron');
const {autoUpdater} = require("electron-updater");


app.on('ready', function() {
  // Creation of the new window.
  this.window = new BrowserWindow({
    show: true,
    height: 710,
    width: 600,
    frame: false,  
    backgroundColor: '#E4ECEF',
    resizable: true
  });    

  // and load the index.html of the app.
  this.window.loadFile('./main.html');
});