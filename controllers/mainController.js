const express = require("express");

const path = require("path");

mainController = {
  index: (req, res) => {
    res.render('index', { title: 'Mercado Liebre' });
  }
};

module.exports = mainController;
