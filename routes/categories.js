const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("<h1>Here is the list of all Categories.</h1>");
})


router.post("/",(req,res)=>{
    res.send("<h1>A new Category has been created.</h1>");
})

module.exports = router;