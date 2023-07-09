const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// Setup ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// 
app.get("/", (req,res)=>{
    res.render("home", {
        layout:"layouts/main-layout",
        title: "Glenn Rhee's"
    })
})

app.get("/about", (req,res)=>{
    res.render("about", {
        layout:"layouts/main-layout",
        title:"Glenn Rhee's | About"
    })
})


app.use((req,res,next)=>{
    res.status(404).send("Halaman tidak ditemukan");
    next();
})


app.listen(port, () => {
    console.log("Web Server listening on port " + port);
})