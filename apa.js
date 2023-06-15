const express= require('express')
const app=express()
app.get('/',(req, res)=> {
 res.send('Hola mundo')
})

app.get('/pdf', (req, res) => {
    res.sendFile('./Introduccion a la ciencia.pdf', {root: __dirname})
})

app.get('/word', (req, res) => {
    res.sendFile('./tutor_estudi.docx', {root: __dirname})
})

app.get('/imagen', (req, res) => {
    res.sendFile('./dani.jpg', {root: __dirname})
})

app.get("/json", (req, res) => {
    res.json({
        nombre: "Maria",
        Apellido: "Flower",
        age: 16,
        estatura: 1.7,
        calificaciones: [5,4,3,5,4.5],
        ciudad: "Bucaramanga",

    });
});
app.listen(3001)
console.log(`Servidor en el puerto: ${3001}`)