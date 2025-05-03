const { app, BrowserWindow } = require('electron');
var path = require('path');

function createWindow() {
  // Créer la fenêtre du navigateur.
  let win = new BrowserWindow({
    width: 700,
    height: 700,
    minWidth: 530,
    maxWidth: 800,
    frame: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      sandbox: true,
      webSecurity: true,
      preload: path.join(__dirname + "/backend/preload.js")
    }
  });

  win.loadURL('http://localhost:3000');

  /*ipcMain.on("app/close", () => {
    app.quit();
  });
  
  ipcMain.on("app/minimize", () => {
    win.minimize()
  });*/
}

app.whenReady().then(createWindow);


