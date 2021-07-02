const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get("/about", (req, res) => {
    res.send("<h1>Hi about page</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Mail me, I'll be happy to connect :)</h1>");
})

app.get("/contact/:name", (req, res) => {
    res.send("Hello " + req.params.name);
})

app.listen(3000, (req, res) => {
    console.log("Server started running at port 3000.");
})