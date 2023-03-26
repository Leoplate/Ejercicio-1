const express = require('express');
const app = express();

const puerto = 3000;

app.listen(puerto, () => console.log('La aplicacion esta lista en http://localhost:' + puerto));
