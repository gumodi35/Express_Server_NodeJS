// Agregamos el archivo app.js y creamos la app de express
// usamos el objeto app
const express = require('express')
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app. localhost:3000
const port = 3000

// path inicial, respondera a la url localhost:3000
app.get('/',(req, res) => {
    res.send('Hello World this apps is made for Gualberto!')
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Hello World LaunchX¡')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer Gualberto", msg: "Hello Launchx WOOPA¡"}
    res.send(explorer)
})

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/gualberto
// req.params = {"explorerName": "gualberto"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})