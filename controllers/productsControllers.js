const path = require('path');

const productModel = require('../models/product');

const controllers = {
    
   // @GET /products/:id/detail
getProductDetail: (req, res) => {
    // Agarramos el ID que nos pasaron por parámetro de ruta, y lo convertimos en number
    const id = Number(req.params.id);
  
    // Buscamos en el array de productos, el producto cuyo ID coincida con el que nos enviaron por params
    const productoAMostrar = productModel.findById(id);
  
    // Si el producto no se encuentra (su id es inválido)
    if (!productoAMostrar) {
        // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de error
        // *queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
        return res.send('error de id');
    }
  
    // Renderizamos la vista productDetail, y le pasamos los datos del producto solicitado
    res.render('productDetail', { title: 'Detalle producto', producto: productoAMostrar });
  },

    // @DELETE /products/:id/delete
    deleteProduct: (req, res) => {
        const id = Number(req.params.id);

        productModel.deleteById(id);

        res.redirect('/');
    },

    updateProduct: (req, res) => {
        const id = Number(req.params.id);
        const nuevosDatos = req.body;

        productModel.updateById(id, nuevosDatos);

        res.redirect('/');
    },

    // @GET /products/cart
    getCart: (req, res) => {
        res.render('cart', { title: 'Carrito' });
    },

    // @GET /products/create
    getCreate: (req, res) => {
        res.render('createProduct');
    },

    // @POST /products
    postProduct: (req, res) => {
        let datos = req.body;

        console.log(req.files)

        datos.price = Number(datos.price);
        /* datos.img = '/imgs/products/' + req.file.filename; */
        datos.imgs = req.files.map(file => '/imgs/products' + file.filename);

        productModel.createOne(datos);

        res.redirect('/products');
    }
}

module.exports = controllers;