const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static("public"));

app.listen(PORT, () =>{
    console.log("servidor Funcionando en el puerto"+ PORT);
})

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
})
app.get("/ingresa",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})
app.get("/registrate",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})