const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Créer la fenêtre du navigateur.
  let win = new BrowserWindow({
    width: 700,
    height: 700,
    minWidth: 530,
    maxWidth: 800,
    titleBarStyle: 'hidden',
    //frame: false,
  });

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);
