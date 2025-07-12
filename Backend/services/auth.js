const jwt =require('jsonwebtoken');


function setUser(user){
    return jwt.sign({
        _id: user.id,
        email: user.email,
    },process.env.SECRET_KEY);
}



function getUser(token){
    
    // console.log(token);
    if(!token) return null;

    try{
        return jwt.verify(token,process.env.SECRET_KEY);
    }
    catch(error){
        return null;
    }
    
}



module.exports={setUser,getUser};