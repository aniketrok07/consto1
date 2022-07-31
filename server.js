var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.send(
        "Welcome To Consto"
    )
})

var server=app.listen(9000);
console.log("Consto server running on port 9000");