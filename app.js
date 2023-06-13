const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const methodOverride = require("method-override");
const session = require('express-session')

const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const productsRoutes =require("./routes/productsRoutes")

const app = express();

app.set("view engine", "ejs");

app.set("views", [
  path.join(__dirname, "./views/main"),
  path.join(__dirname, "./views/users"),
  path.join(__dirname, "./views/products"),
]);

/* --- Middlewares --- */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({secret: 'secreto', resave:false, saveUninitialized: true}))

/* --- Routers --- */
app.use(mainRoutes);
app.use(userRoutes);
app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log("servidor Funcionando en el puerto http://localhost:" + PORT);
});
