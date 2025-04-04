# API CRUD con GitFlow

Proyecto CRUD desarrollado con Node.js, Express y MongoDB, implementando la metodología GitFlow como parte de una práctica de control de versiones desarrollada por Yameli Martínez Taveras, de matrícula 2023-1390.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript
- **Express.js**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB

## Funcionalidades

Este proyecto implementa un API REST completo para gestionar productos con las siguientes operaciones CRUD:

- Crear productos
- Leer productos (todos o por ID)
- Actualizar productos
- Eliminar productos

## Instalación y configuración

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/crud-gitflow.git
   cd crud-gitflow
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/crud-gitflow
   ```

4. Inicia MongoDB localmente o configura una conexión a MongoDB Atlas

5. Inicia el servidor:
   ```
   npm start
   ```
   Para desarrollo con recarga automática:
   ```
   npm run dev
   ```

## Estructura del proyecto

```
├── index.js           # Punto de entrada de la aplicación
├── package.json       # Configuración del proyecto y dependencias
├── .env               # Variables de entorno (no incluido en el repositorio)
├── .gitignore         # Archivos ignorados por Git
├── coleccion.json     # Colección de Postman para probar la API
├── models/            # Modelos de datos
│   └── product.js     # Modelo de producto
└── routes/            # Rutas de la API
    └── products.js    # Rutas para operaciones de productos
```

## Endpoints de la API

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/products | Obtener todos los productos |
| GET    | /api/products/:id | Obtener un producto por ID |
| POST   | /api/products | Crear un nuevo producto |
| PUT    | /api/products/:id | Actualizar un producto existente |
| DELETE | /api/products/:id | Eliminar un producto |

## Modelo de datos

### Producto

```javascript
{
  name: String,         // Nombre del producto (obligatorio)
  price: Number,        // Precio del producto (obligatorio)
  description: String,  // Descripción del producto
  category: String,     // Categoría del producto
  inStock: Boolean,     // Disponibilidad en stock (default: true)
  imageUrl: String,     // URL de la imagen del producto
  createdAt: Date       // Fecha de creación (default: Date.now)
}
```

## Pruebas con Postman

Para probar la funcionalidad de la API se incluye un archivo `coleccion.json` que puedes importar en Postman:

1. Abre Postman
2. Haz clic en "Import"
3. Selecciona el archivo `coleccion.json` del proyecto
4. Una vez importada, podrás probar todos los endpoints de la API

## Implementación de GitFlow

Este proyecto implementa la metodología GitFlow con las siguientes ramas:

- **master**: Código en producción
- **develop**: Código de desarrollo integrado
- **qa**: Código para pruebas de calidad
- **feature/xxx**: Ramas para el desarrollo de funcionalidades específicas

### Ramas feature implementadas:

1. **feature/mongodb-setup**: Configuración de la conexión a MongoDB
2. **feature/product-model**: Implementación del modelo de datos para productos
3. **feature/get-products**: Implementación de rutas GET para productos
4. **feature/create-update-products**: Implementación de rutas POST y PUT
5. **feature/delete-products**: Implementación de rutas DELETE