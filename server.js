const express = require('express');
const port = 4444;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    // res.send('<h1>Pls.Add a Product to your Cart</h1>');
    res.send('<form action="/product" method="post" autocomplete="on"><label for="product">Enter the Product : </label><input type="text" name="product" required><label for="size">Enter Size of the Product : </label><input type="text" name="cost" required><button>add product</button></form>');
});

app.post('/product',(req,res,next)=>{
    res.redirect('/');
    console.log(req.body);
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to amazon</h1>');
})

app.listen(port);