const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const applicantsSchema= new Schema({
        username: {
            type:String,
            required: false
        },
        applicationID: {
            type:String,
            required: false
        },
        description: {
            type:String,
            required: false,
            default: "Reason not defined"
        },
        email: {
            type:String,
            required: false
        },
        appliedDate: {
            type:Date,
            required: false
        },
        contact: {
            type:Number,
            required: false,
            minlength:10
        },
        clearedRound: {
            type:Number,
            required: false,
            minlength:1,
            default: 0
        },
        rating: {
            type:Number,
            required: false,
            minlength:1,
            default: 0
        },
        post: {
            type:String,
            required: false
        },
        status: {
            type:String,
            required: false,
            default: "Applied"
        },
    },
    {
        timestamps:true,
});

const Applicants= mongoose.model("applicants", applicantsSchema);

module.exports= Applicants;