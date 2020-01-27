const jwt = require('jsonwebtoken') ;
const User = require('../models/studentLogins');
const {jwtSigningKey} = require('../configBreakout')

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '') ;
        const decoded = jwt.verify(token, jwtSigningKey) ;
        const user = await User.findOne({ userName: decoded._id});
        if(!user){
            throw new Error() ;
        }
        req.user = user ;
        next() ;
    }catch(e){
        res.status(401).send({error: 'Not Authenticated'}) ;
    }
}

module.exports = auth ;