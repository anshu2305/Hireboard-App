const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app=express();
const port=3001;
//process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //allow to parse the son as bodyparser is alredy included in express module.

const uri= process.env.ATLAS_URI;
mongoose.connect( uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } 
)
.then(() => console.log("Db connected"));


const connection = mongoose.connection;
connection.once( "open", () => {
    console.log("Mongodb established succesfully");
}) //this statements tells once the connection is extablished then execute this

//adding the routing files
const applicantRouter= require("./routes/applicants");
const userRouter= require("./routes/users");

app.use("/applicants",applicantRouter);
app.use("/users",userRouter);

app.listen(port, ()=> {
    console.log("server is runnning on port: " + port);
});