const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const methodOverride = require("method-override");

const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.set("view engine", "ejs");

app.set("views", [
  path.join(__dirname, "./views/main"),
  path.join(__dirname, "./views/users"),
]);

/* --- Middlewares --- */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

/* --- Routers --- */
app.use(mainRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log("servidor Funcionando en el puerto http://localhost:" + PORT);
});
