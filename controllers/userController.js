const express = require("express");

const path = require("path");

userController = {
  logIn: (req, res) => {
    res.render("login", {title: 'Ingresa'});
  },

  logUp: (req, res) => {
    res.render("register", {title: 'registrate'});
  },
};

module.exports = userController;