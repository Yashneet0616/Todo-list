const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const parser = require("body-parser");
const {create_task,read_task,update_task,delete_task} = require("./src/controller");

server.use(cors());
server.use(parser());


mongoose.connect("mongodb://127.0.0.1:27017/To-Do");
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
});




server.post("/createtask",create_task);

server.get("/readtask",read_task);

server.put("/updatetask",update_task);

server.delete("/deletetask",delete_task);





server.listen("3000",()=>{
    console.log("server started on Port: 3000");
});
