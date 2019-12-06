const express=require('express');
let jwt=require('jsonwebtoken');
const app=express();


app.post('/auth/login',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:"Authentication Successful",
                authData
            })}})})


app.post('/auth/signup',(req,res)=>{
    const user={
        name:"Harika",
        email:"harika@gmail.com",
        password:"123456"
    }
jwt.sign({user},'secretkey',(err,token)=>{
    res.json({
        token
    })
})
})

//verify Token
function verifyToken(req,res,next){
    console.log(req.headers)
    // console.log(req.headers['authorization'])
    //Get auth header value
    const bearerHeader=req.headers.authorization;
    if(typeof bearerHeader !=="undefined"){

const bearer=bearerHeader.split(' ');
console.log(bearer);

const bearerToken=bearer[1];
req.token=bearerToken;
next();
    }
    else{
        res.sendStatus(403);
    }

}

app.listen(3000);