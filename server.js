const express = require('express');
const port = 4040;
const app = express();
app.use((req,res,next)=>{
    console.log('hello middleware-1.');
    next(); 
});
app.use((req,res,next)=>{
    console.log('hello middleware-2.');
    res.send('<h1>Hello Rashmika Mandanna</h1>');
});
app.listen(port);