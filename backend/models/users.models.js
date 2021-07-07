const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const userSchema= new Schema(
    {
        username: {
            type:String,
            required: true,
            unique: true,
            trim: true, //removes whitespaces at the end
            minlength: 3
        },
    },
    {
        timestamps:true,
    }
);

const Users= mongoose.model("user", userSchema);

module.exports= Users;