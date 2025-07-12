
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






// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ error: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };
// >>>>>>> refs/remotes/origin/main

