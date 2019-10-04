let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment");
});

app.get("/speak/:animals", function(req, res){
    let animal = req.params.animals;
    let sound = "";
    if(animal === "pig"){
        res.send(sound = "Oink");
    }else if(animal === "cow"){
        res.send(sound = "Moo");
    }else if(animal === "cat"){
        res.send(sound = "Meow");
    };
});

app.get("/:messages/:times", function(req, res){
    let message = req.params.messages;
    let times = Number(req.params.times);
    let result = "";
    for(let i = 0; i < times; i++){
        result += message;
    };
    res.send(result);
    
});

app.get("/*", function(req, res){
    res.send("sorry, page not found...what are you doing with your life?");
});


app.listen(3000, function(){
    console.log("Your port is active!!");
});