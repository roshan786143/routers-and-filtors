const express = require('express');
const userLogin = express.Router();
userLogin.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`user`).value)" action="/" method="POST"><label for="user">Enter your Username : </label><input id="username" type="text" name="username"><button type="submit">Login</button></form>');
 });
 module.exports = userLogin;