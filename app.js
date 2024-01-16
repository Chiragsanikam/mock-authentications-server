const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3000
const fs=require('fs')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json())

let loginData=[]
let passwords=[]
let count=1


//signing up on the server
app.post('/signup', (req, res) => {
    let condition=false
    let signupData={
        id:count,
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    }
     for(i=0;i<loginData.length;i++){
        if(loginData[i].username==signupData.username){
            condition=true;
            res.status(401).send("usernae already exists")
            break;
        }
     }
        if(!condition){
            loginData.push(signupData)
            res.status(201).json(loginData)
            count=count+1
        }
  })

  //logging in 
  app.post('/login',(req,res)=>{
    let loginData={
        username:req.body.username,
        password:req.body.password
    }
    for(i=0;i<loginData.length;i++){
        if(loginData[i].username==username && loginData[i].password==password){
            res.status(200).send()
        }
        else{
            res.status(401).send("error")
        }
    }
  })

    //getting data
    app.get('/data', (req,res)=>{

    })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })