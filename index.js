const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crud-gitflow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Ajustes adicionales para la conexión
  serverSelectionTimeoutMS: 5000, // Tiempo de espera para selección de servidor
  socketTimeoutMS: 45000 // Tiempo de espera para operaciones de socket
})
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API CRUD con GitFlow');
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));