const express = require("express");
const app = express();
const port = 3000
const path = require("path")
//(npm i nodemon), luego escribir(npx nodemon app ->(escribir nombre de la carpeta))(npm i express)
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Servidor funcionando...")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"))
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"))
});


