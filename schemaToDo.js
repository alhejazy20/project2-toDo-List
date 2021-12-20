const mongoose=require('mongoose');






const todoList=new mongoose.Schema({
    title:String,
    isCompleted:String,
})


const todo=mongoose.model('title',todoList);

module.exports=todo;
