const express = require("express");

const path = require("path");

userController = {
  logIn: (req, res) => {
    res.render("login");
  },
  
  logUp: (req, res) => {
    res.render("register");
  },
};

module.exports = userController;