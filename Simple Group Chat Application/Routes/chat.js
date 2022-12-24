const express = require("express");
const userChat = express.Router();
const fs = require("fs");
const bodyParser = require('body-parser');
userChat.use(bodyParser.urlencoded({extended:false}));

// userChat.get("/", (req, res, next) => {
//   const msg = req.body;
//   console.log(msg);
//   res.send(`<h3>${msg}</h3>`);
//   res.redirect('/');
// });
userChat.post('/',(req,res,next)=>{
    res.send(
        '<form action="/" document.getElementById(`username`).value = localStorage.getItem(`username`) method="post" autocomplete="on"><label for="msg">message : </label><input type="text" id="msg" name="msg" placeholder="Type a message..." required><input type="hidden" id="user" name="user"><button>Send</button></form>'
      );
        const data = req.body.msg+" ";
      // console.log(data);
      const user = req.body.username;
      console.log(req.body.username);
      fs.writeFile('messages.txt',`${req.body.username}: ${data}`,{flag:'a'},(err)=>{
        if(err){
          console.log(err);
        }
      })
    });

    module.exports = userChat;