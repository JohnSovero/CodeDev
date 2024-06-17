require('dotenv').config();

const app = require('./server'); // Asumiendo que server.js exporta tu app express
require('./database'); // Esto debería establecer la conexión a MongoDB

const port = process.env.PORT || 80; // Obtener el puerto del entorno o usar el puerto 3000 por defecto

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});