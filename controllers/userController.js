const express = require("express");

const path = require("path");

userController = {
  logIn: (req, res) => {
    res.render("login", {title: 'Ingresa'});
  },

  processLogin: (req, res)=>{
    let errors = validationResult(req);

    if(errors.isEmpty()){
      
    }else{
      return res.render('/login',{errors:errors.errors});
    }
  },

  logUp: (req, res) => {
    res.render("register", {title: 'registrate'});
  },
};

module.exports = userController;