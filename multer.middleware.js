const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname,"public/uploads"));
    },
    filename : function(req,file,cb){
        crypto.randomBytes(12,function(err,bytes){
            if (err) return null;
            cb(null, bytes.toString("hex") + path.extname(file.originalname));
        });
    }
});

module.exports = storage;