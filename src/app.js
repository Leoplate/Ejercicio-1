const vec = [1,2,3,4,5,6,7,8,9];
const vec2 = []
let conta = 0
vec.filter( n => n % 2 == 0).map(n => conta = conta + n );
//console.log(conta);
//console.log("Hola Leo");


//Importa una funcion
const express = require('express')
//Ejecuto la funcion y lo guardo en app
const app = express();
//puerto para el servidor
const PORT = 3001;
app.get('/api',(req, res)=> {
    //res.json({mensaje:'hola mundo'}).status(200)
    res.json({mensaje:'Ines Diaz Alegria'}).status(200)
});
app.get('/api',(req, res)=> {
    //res.json({mensaje:'hola mundo'}).status(200)
    res.json({mensaje:'Argentina campeon del mundo 2022'}).status(200)
});



//pongo la aplicacion a escuchar
app.listen(PORT, () => {console.log('Estoy escuchando en el puerto:' + PORT)})
