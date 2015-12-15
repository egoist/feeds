var menubar = require('menubar')

var mb = menubar({
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})

mb.on('after-create-window', function created () {
  mb.window.openDevTools()
})
