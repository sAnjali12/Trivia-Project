const express = require("express")
const knex = require("../Model/knex.js")
const path = require("path")
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/firstPage',function(req,res){
    res.sendFile(path.join(__dirname+'/view/firstPage.html'));
});

app.get('/secondPage',function(req,res){
    res.sendFile(path.join(__dirname+'/view/secondPage.html'));
});

app.get('/thirdPage',function(req,res){
    res.sendFile(path.join(__dirname+'/view/thirdPage.html'));
});

app.get('/nextPage',function(req,res){
    res.sendFile(path.join(__dirname+'/view/nextPage.html'));
});

app.post("/added-name",(req,res)=>{

    var user_name=req.body.fullname;
    var question = "What's your Name"
    var data = {"Questions":question,"Answer":user_name}
    var response=knex.insertData(data)
    response.then((data)=>{
        res.json(data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        res.send(err)
    })
    res.send(user_name)
    
})
app.post("/add",(req,res)=>{
    var user_name=req.body.fullname;
    var question = "Who is the best cricketer in the world?"
    var options={"A":"Adam Gilchirst","B":"Virat Kohli","C":"Sachin Tendulkar","D":"Rohit Sharma"}
    if(user_name=="C" || user_name=="c"){
        var ans = options[user_name]
        res.send("Your are right..")}
    else{
        var ans = options[user_name]
        res.send("Your are wrong...")
    }var data1 = {"Question":question,"Answer":ans}
    var resp=knex.insertData(data1)
    resp.then((data1)=>{
        res.json(data1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        res.send(err)
    })
 
})

app.post("/options",(req,res)=>{
    var colour=["A","a","C","c","d","D"]
    var question="What are the colors in the Indian national flag? Select all:"
    var user_name=req.body.name;
    var str=["White","Orange","Green"]
    var count=0
    var split_user=user_name.split("")
    var string=""
    for(let i=0; i<split_user.length; i++){
        if (colour.includes(split_user[i])){
            count=count+1
            string=string+str[i]+","
        }else{
            res.send("Your Answer is wrong")
        }
    }if(count==3){
        res.send(string)
    }else if(count == 1){
        res.send("select more than one")
    }else{
        res.send("choose one more option")
    }data2= {"Question":question,"Answer":string}
    var r=knex.insertData(data2)
    r.then((data2)=>{
        res.json(data2)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        res.send(err)
    })
})

app.get("/get",(req,res)=>{
    var data = knex.select()
    .then((data) => {
        res.send(data);
    })

})


app.listen(3000, function () {
    console.log('server is listening port 3000.....');
});


