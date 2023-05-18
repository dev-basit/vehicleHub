const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";
const User = require("../Models/User")

router.post("/register", async(req, res) => {
    const newuser=new User({name: req.body.name, email: req.body.email, phoneNo: req.body.phoneNo, password: req.body.password})
    try {
        const existingUser = await newuser.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"});
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);

            const result = await newuser.create({name: name, email: email, phoneNo: phoneNo, password: hashedPassword });
            
            const token = jwt.sign({email : result.email, id: result._id}, SECRET_KEY);
            
            res.status(201).json({user: result, token: token, message: "User Registered Successfully"})
        }
    } catch (error) {
        return res.status(400).json({error});
    }
});

router.post("/login", async(req, res) => {
    const {email, password}=req.body
    try {
        const existingUser=await User.findOne({email: email, password: password})
        if(!existingUser){
            return res.status(404).json({message : "User not found"})
        }
        else{
            const matchPassword = await bcrypt.compare(password, existingUser.password);
            if(!matchPassword){
                return res.status(400).json({message: "Invalid Credentials"})
            }
            else{
                const token = jwt.sign({name:existingUser.name, email : existingUser.email, isAdmin:existingUser.isAdmin, id: existingUser._id}, SECRET_KEY);
                res.status(201).json({user: result, token: token, message: "User Log In Successfully"})
            }
        }
    } catch (error) {
        return res.status(400).json({error});
    }
})


module.exports = router;