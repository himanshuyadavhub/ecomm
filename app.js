const express = require('express');
const app = express();
const PORT = 4000;

const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');


app.use(function(req,res,next){
    const method = req.method;
    const endPoint = req.url;
    console.log(`${method} request made to ${endPoint}`);
    next();
})


app.use("/products",productsRoutes);
app.use("/categories",categoriesRoutes);


app.get(/.*/, (req, res) => {
  res.status(404).send('Page Not Found');
});


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})