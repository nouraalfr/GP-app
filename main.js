const {BrowserWindow, app} = require('electron');
const path = require('path');


const createwindow = ()=> {
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile("index.html")
}




app.whenReady().then(() =>{
    createwindow();
});




app.on('window-all-closed', () => {
    if (process.platform !=='darwin') app.quit()
})