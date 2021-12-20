const express = require ('express');
const server=express();
const db =require('./db')
const todo=require('./schemaToDo')


server.listen(3000,(req,res)=>{
    console.log("server is working");
})

server.get('./a',(req,res)=>{
    res.send("working")


})

server.get('./allData',(req,res)=>{
    todo.find({},(err,newData)=>{
        if(err){  return handleError(err) }
        res.send(newData)
    })
})

server.post('./b',(req,res)=>{
    todo.create({title:'abc'},(err,newData)=>{
        if(err){return handleError(err)}
        console.log(newData);
    })
})



