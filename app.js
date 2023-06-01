const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.set('views',[
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/users')
]);

app.use(mainRoutes);
app.use(userRoutes);

app.listen(PORT, () =>{
    console.log("servidor Funcionando en el puerto"+ PORT);
});