const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const { check, validationResult, body } = require("express-validator");
const { addData, connection } = require("./data/db");
const app = express();
const port = 3000;

// Setup ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Home
app.get("/", (req, res) => {
    res.render("home", {
        layout: "layouts/main-layout",
        title: "Glenn Rhee's"
    })
})

// About
app.get("/about", (req, res) => {
    res.render("about", {
        layout: "layouts/main-layout",
        title: "Glenn Rhee's | About"
    })
})

// Services
app.get("/services", (req, res) => {
    res.render("services", {
        layout: "layouts/main-layout",
        title: "Glenn Rhee's | Services"
    })
})

// Portfolio
app.get("/portfolio", (req, res) => {
    res.render("portfolio", {
        layout: "layouts/main-layout",
        title: "Glenn Rhee's | Portfolio"
    })
})

// Contact 
app.get("/contact", (req, res) => {
    res.render("contact", {
        layout: "layouts/main-layout",
        title: "Glenn Rhee's | Contact Us"
    })
})

// Melakukan sesuatu ke contact 
app.post("/contact", [
    body("name")
        .custom(value => {
            if (value == '') {
                throw new Error("Please fill your name")
            }
            return true
        }),
    body("phoneNumber")
        .if((value) => value !== '')
        .isMobilePhone("id-ID").withMessage("Please fill out your phone number properly"),
    check("email", "Please fill out your e-mail address properly").isEmail(),
    check("message")
        .notEmpty().withMessage("Please fill your message")
], async (req, res) => {
    const errors = validationResult(req);
    const data = req.body;
    if (!errors.isEmpty()) {
        const dataError = errors.array();
        res.render("contact", {
            layout: "layouts/main-layout",
            title: "Glenn Rhee's | Contact Us",
            dataError,
            data
        })
    } else {
        try {
            const data = req.body;
            await addData(data);
            res.render("contact", {
                layout: "layouts/main-layout",
                title: "Glenn Rhee's | Contact Us",
                message: "Thank You for your messages :)"
            })
        } catch (err) {
            console.log(err);
        }
    }
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        layout: "layouts/layout-404"
    })
    next();
})

app.listen(port, () => {
    console.log("Web Server listening on port " + port);
})