const jwt = require("jsonwebtoken");
require("dotenv").config();

const fetchuser = (req,res,next)=>{
    
    //validating user using a valid token
    const token = req.header("authentication-token");
    if(!token){
        res.status(401).send({"error":"Please authenticate using a valid token!"})
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({"error":"Please authenticate using a valid token!"})
    }
    
}

module.exports = fetchuser;