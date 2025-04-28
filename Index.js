const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Créer la fenêtre du navigateur.
  let win = new BrowserWindow({
    width: 600,
    height: 800,
  });

  // et chargez l'index.html de l'application.
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);
