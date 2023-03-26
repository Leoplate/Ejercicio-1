const express = require("express");
const app = express();



app.listen(3001, () => console.log("Escuchando el servidor"));

app.get('/cliente',(req, res)=> {
    res.json({nombre:'Ines Diaz Alegria',
              direccion: 'Forly 787',
              dni:'92608198'}).status(200)
});
  
  
