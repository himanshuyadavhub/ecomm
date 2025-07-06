const express = require('express');
const app = express();
const PORT = 4000;


app.get("/products",(req,res)=>{
    res.send("<h1>Here is the list of all Products</h1>")
});

app.post("/products",(req,res)=>{
    res.send("<h1>A new product has been added</h1>");
})

app.get("/categories",(req,res)=>{
    res.send("<h1>Here is the list of all Categories.</h1>")
});

app.post("/categories",(req,res)=>{
    res.send("<h1>A new Category has been created.</h1>");
})

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})