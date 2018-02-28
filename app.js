const express = require('express')
var app = express()
const path = require('path')

// servir archivos estaticos encontrados en un directorio
// __dirname es una variable interna que hace referencia al directorio local
app.use(express.static(path.join(__dirname, '/public')))

// si el usuario visita el Home, reciba el index
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '/public/index.html'))
})

// catch all, obtener todas las rutas que no estan configuradas
app.get('/*', (req, res) => {
  return res.redirect('/')
})

module.exports = app
