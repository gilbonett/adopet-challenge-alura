const database = require('../models')
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');


module.exports = (req, res, next) => {

    console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({msg: "Unauthorized access"});

    } else {

        // Comprobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "There was a problem decoding the token", err });
            } else {
                req.user = decoded; //TODO
                next();
            }

        })
    }

}; 