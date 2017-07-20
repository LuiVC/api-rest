'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
res.send(200, {products:[]})
})

app.get('/api/product/productID', (req, res) => {
console.log(req.body)
res.status(200).send({mesagge:'El producto se ha recibido'})
})

app.post('/api/product',(req, res) => {

})
//Actualizaciones
app.put('/api/product:productID',(req, res) => {

})

app.delete('/api/product:productID',(req, res) => {

})

app.listen(port, () => {
 console.log(`API REST corriendo en http://localhost:${port}`)
})﻿
