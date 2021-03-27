const express = require('express')
const app = express()
const puerto = 8000

let id = 1


let productos = [
    {title: 'escuadra', price: 150, thumbnail: 'linkFoto'},
    {title: 'calculadora', price: 390, thumbnail: 'linkFoto'},
    {title: 'lapicera', price: 87, thumbnail: 'linkFoto'}
]

productos.map(item =>  item.id = id ++)

app.get('/api/productos/listar', (req, res) => {    
    res.send(productos.length < 1 ? {error: 'No hay productos'} : productos)
})

app.get('/api/productos/:id', (req, res) => {     
    let result = productos.filter(item => item.id == req.params.id)       
    if(req.params.id > productos.length){
        return res.send({error: 'No existe el producto'})        
    }else{        
        return res.send(result)
    }   
})

app.post('/api/productos/guardar', (req, res) => {
    let nuevoProducto = {title: 'sacapuntas', price: 150, thumbnail: 'linkFoto'}
    nuevoProducto.id = id   
    let productosAct = productos.push(nuevoProducto)
    res.send(nuevoProducto)
})

app.listen(puerto, ()=> {
    console.log('running')
}).on('error', e => {console.log('Error: ' + e)})

