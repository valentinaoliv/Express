const { captureRejectionSymbol } = require('events');
var express = require('express');
var app = express();

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) =>{
    console.log(req.body)
    res.send("usuario creado")
})

app.get('/saludo/:username/:edad', (req, res) =>{
    console.log(`${req.params.username} tu edad es : ${req.params.edad}`)
    console.log(typeof req.params)
    console.log(req.params)
    res.send(`Hola ${req.params.username} tu edad es: ${req.params.edad}`)
});

app.get('/suma/:x/:y', (req, res) =>{
    console.log(req.params.x)
    console.log(req.params.y)
    console.log(req.params)
    const {x,y} =req.params

    const result = parseInt(x) + parseInt(y)
    console.log(`Resultado: ${result}`)

    res.send(`Resultado de sumar ${x} and ${y} es igual a ${result}`)
})

app.listen(3000)
console.log(' servidor en el puerto 3000')