

const { Template } = require('ejs');
const express=require('express');
const team = require('./../models/team');
const Team=require('./../models/team')
const router=express.Router()

function myFunction() {
  alert("I am an alert box!");
}

router.get("/login",(req,res)=>{

        res.render('team/login');
})
router.get("/create",(req,res)=>{

        res.render('team/create');
})
router.post("/create",async(req,res)=>{
        const newteam=new Team({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                collegename: req.body.collegename,
                information: req.body.techstack,
                github: req.body.github                
        });
        Team.findOne({email: req.body.email},async(err,foundUser)=>{

                if(foundUser){
                       myFunction()
                }else{
                        try{
                await newteam.save()
                const team=await Team.find();
                res.render('./team/index',{teams: newteam})
                }catch(e){
                alert("Email use before ")
                console.log(e);
                }} }) })

router.post("/login",async(req,res)=>{

        const email=req.body.email;
        const password=req.body.password;
        const team=await Team.find();
        
         Team.findOne({email: email},(err,foundUser)=>{

                if(err){
                        console.log(err)
                        res.redirect("/login");
                }else{

                        if(foundUser){
                                if(foundUser.password==password){
                                        
                                        res.render("./team/index",{teams: team});

                                }else{
                 
                                }
                        }else{
                                res.send("Not found");
                        }

                }  })})



module.exports=router