'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const product = require('/home/luisa/Documentos/Coding/api-rest/models/product')

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
console.log(req.body);
res.status(404).send({message:'El producto no existe'})
})

//Actualizaciones
app.put('/api/product:productID',(req, res) => {

})

app.delete('/api/product:productID',(req, res) => {

})


mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
  if (err) {
    return (console.log(`Error al conectar a la base de datos:${err}`))
  }
  console.log('Conexion a la base de datos establecida...')

app.listen(port, () => {
 console.log(`API REST corriendo en http://localhost:${port}`)
})﻿
})
