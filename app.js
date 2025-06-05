const express = require('express');
const multer = require("multer");
const bodyParser = require('body-parser');
const crypto = require('crypto');
const storage = require("./multer.middleware.js");
const path = require("node:path");

const app = express();
const upload = multer({storage : storage});


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/upload",upload.single("file"),(req,res)=>{
    try{
        res.end("File uploaded!");
    }
    catch(error){
        console.log(error);
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000");
})


