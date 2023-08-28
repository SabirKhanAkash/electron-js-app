const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron",
    width: 600,
    height: 400,
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
