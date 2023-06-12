const express = require("express");

const path = require("path");
const productModel = require('../models/product');

mainController = {
  index:(req, res) => {
    const productos = productModel.findAll();

    res.render('index', {
        title: 'Mercado Liebre',
        productos
    });
}

};

module.exports = mainController;
