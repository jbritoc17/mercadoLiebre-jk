const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static("public"));

app.listen(port, () =>{
    console.log("servidor Funcionando en el puerto"+port);
})

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
})