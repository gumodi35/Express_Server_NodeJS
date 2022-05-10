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

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})