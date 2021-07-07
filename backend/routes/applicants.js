const router= require("express").Router();
const applicant= require("../models/applicant.models");

router.route("/").get((req,res)=>{
    applicant.find()
        .then(applicants => res.json(applicants))
        .catch(err => res.status(400).json("error: "+err));
});

router.route("/add").post((req,res)=>{
    const username= req.body.username;
    const appId= req.body.applicationId;
    const description=req.body.description;
    const email= req.body.email;
    const post= req.body.post;
    const date= Date.parse(req.body.appliedDate);
    const contact= req.body.contact;
    const status = req.body.status;
    const rating = req.body.rating;
    const clearedRound= req.body.clearedRound;

    const newapplicant= new applicant({
        username,
        appId,
        post,
        date,
        contact,
        email,
        status,
        rating,
        clearedRound,
        description
    });

    newapplicant.save()
        .then(() => res.json("Applicant added!"))
        .catch(err => res.status(400).json("error: "+err));
});

router.route("/:id").get((req,res)=>{
    applicant.findById(req.params.id)
        .then(applicant => res.json(applicant))
        .catch(err => res.status(400).json("error: "+err));
});

router.route("/:id").delete((req,res)=>{
    applicant.findByIdAndDelete(req.params.id)
        .then(() => res.json("Applicant Deleted!"))
        .catch(err => res.status(400).json("error: "+err));
});

router.route("/update/:id").post((req,res)=>{
    applicant.findById(req.params.id)
        .then(applicant=>{
            applicant.username= req.body.username;
            applicant.appId= req.body.applicationId;
            applicant.description=req.body.description;
            applicant.email= req.body.email;
            applicant.post= req.body.post;
            applicant.date= Date.parse(req.body.appliedDate);
            applicant.contact= req.body.contact;
            applicant.status = req.body.status;
            applicant.rating = req.body.rating;
            applicant.clearedRound= req.body.clearedRound;
            
        applicant.save()
            .then(() => res.json("Applicant details updated!"))
            .catch(err => res.status(400).json("error: "+err));
        })
        .catch(err => res.status(400).json("error: "+err));
});
module.exports = router;