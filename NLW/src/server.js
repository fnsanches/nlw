const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//configurar paths

//pagina inicial
//req Request
//res Response
server.get("/",(req,res) => {
    return res.render("index.html", {title: "Um titulo"})
})

server.get("/create-point",(req,res) => {
    return res.render("create-point.html")
})

server.get("/search-results",(req,res) => {
    return res.render("search-results.html")
})

//ligar o server
server.listen(3000)