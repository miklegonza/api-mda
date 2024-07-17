const express = require('express');
const conectardb = require('./src/config/db');
const cors = require('cors');
const app = express();
const rutas = require('./src/routes/routes')



conectardb();

app.use(cors());
app.use(express.json());

app.use('/api/v1', rutas)



app.listen(3000, () => {
    console.log('el servidor se esta ejecutando en http://localhost:3000');
});
