const express = require ('express');
const server=express();
const db =require('./db')
const todo=require('./schemaToDo')

server.use(express.json())

server.listen(3000,(req,res)=>{
    console.log("server is working");
})

server.get('/a',(req,res)=>{
    res.send("working")


})

server.get('/allData',(req,res)=>{
    todo.find({},(err,newData)=>{
        if(err){  return handleError(err) }
        res.send(newData)
    })
})

server.post('/b',(req,res)=>{
    todo.create(req.body,(err,newData)=>{
        if(err){return handleError(err)}
        console.log(newData);
    })
})


server.delete('/deleted/:id',(req,res)=>{

    todo.deleteOne({_id:req.params.id},(err,deleteObj)=>{
        if(err){
            console.log("error: "+ err)
            res.status(404).json("user not found")
         }else{ console.log(deleteObj)}
   
     })

})



// server.delete("/tasks/:id", (req, res) => {
//     // console.log("37:", req.params.id);
  
//     Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
//       if (err) {
//         console.log("ERROR: ", err);
//       } else {
//         deleteObj.deletedCount === 1
//           ? res.json("Delete one todo successfully")
//           : res.status(404).json("This todo is not found");
//       }
//     });
//   });




server.put('/up/update/:oldId',(req,res)=>{
    todo.updateOne({_id:req.params.oldId},
        {title:req.body.titleNew},(err,new_name)=>{
        if(err){
            console.log("error: "+ err)
            res.status(500).json("*-*")
        }else{console.log(new_name)}
    })
})






