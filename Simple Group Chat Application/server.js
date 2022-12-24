const express = require('express');
const port = 8060;
const app = express();

const userLogin = require('./Routes/login');
const userChat = require('./Routes/chat');

app.use(userLogin);
app.use(userChat);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>There's no page that you are looking for...</h1>`);
})

app.listen(port);