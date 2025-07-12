const {getUser} = require('../services/auth');

async function restrictToLoginUser(req,res,next){
    const userUid = req.cookies?.uid;
    // console.log(userUid);
    
    if(!userUid){
        return res.status(404).json({
            success: false,
            user: null,
            message: "not logged in"
        })
    }


    try {
        const user = getUser(userUid);

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            })
        }

        req.user = user; 
        next();

    }

    catch (err) {
      return res.status(500).json({
         success: false,
         message: "Internal error verifying token"
    });
  }
   
}


module.exports ={ restrictToLoginUser}