const {app, BrowserWindow, ipcMain} = require('electron');
const {autoUpdater} = require("electron-updater");


let win;

function sendStatusToWindow(text) {
  console.log(">>>", text);
  win.webContents.send('message', text);
}



app.on('ready', function() {
  // Creation of the new window.
  win = new BrowserWindow({
    show: true,
    height: 710,
    width: 1600,
    frame: false,  
    backgroundColor: '#E4ECEF',
    resizable: true
  });    

  win.on('closed', () => {
    win = null;
  });  

  // and load the index.html of the app.
  win.loadFile('./main.html');
  win.webContents.openDevTools();  

  setTimeout(() => {
    sendStatusToWindow('App version:' + app.getVersion());  
    // check for updates
    autoUpdater.checkForUpdatesAndNotify();
  }, 1000);
  
});


/* Auto updater */
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})