const express = require("express");
const path = require("path");
const app1 = express();
const app2 = express();
const axios = require('axios').default;

//Recieving Data for player one
console.log("Loading Player 1");
app1.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/player1.html"));
})

//Recieving Data for player two
console.log("Loading Player 2");
app2.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/player2.html"));
}) 

/*
app1.get("/newPar", (req, res) => {
    var newPar = 'This is from the javascript';
    res.send(newPar);
})
*/

app1.listen(7000, function(err){
    if(err)
        return console.log("Err" + err);
})

app2.listen(7001, function (err){
    if(err)
        return console.log("Err" + err);
})

