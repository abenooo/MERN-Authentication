const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

router.get('/', (req,res) => res.send("User route"))
router.post('/', async (req,res) =>{
    const {name,email,password} = req.body

    try {
        let user = await User.findOne({email});
        if(user){
        return res.status(400).json({errors: [{msg: "User already exists"}]});
}
// create the new user if there is no user with that email
user = new User({
    name,
    email,
    password
})
    } catch (error) {
        
    }
})