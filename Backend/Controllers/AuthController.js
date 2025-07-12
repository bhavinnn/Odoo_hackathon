const User = require('../models/user');
const {setUser} = require('../services/auth');


const handleSignUp = async(req,res) => {
    try{
        const {email,password} = req.body;
        const newuser = new User({email,password});
        // console.log(newuser);
        await newuser.save();

        res.status(200).json({
            success: true,
            User: newuser,
        })
    }
    catch(error){
        // console.log(error);
        res.status(500).json({
            success: false,
            message: "internal server error",
        })
    }
}



const handleLogin = async(req,res) => {
    try{
        // console.log("login request accepted from fe")
        const {email,password} = req.body;
        const user = await User.findOne({email,password});
        // console.log("user fetched",user);

        if (!user) {
           return res.status(401).json({
           success: false,
           User: null,
           message: "Invalid Email or Password"
      });
    }
       
        const token = setUser(user);
        // console.log(token);

        res.cookie("uid",token,{
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        
        res.status(200).json({
            success: true,
            User: user,
        })

        // console.log('success');
    }

    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "internal server error",
        })
    }
}



module.exports = {handleSignUp,handleLogin}