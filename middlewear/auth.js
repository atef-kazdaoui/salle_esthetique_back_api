let jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];// hnee khater ktebna bearer w baed espace w baed hatina token w [1] bch yefkhou tl token kahaw 
         jwt.verify(token, process.env.PRIVATE_KEY);
        next();
    } catch {
        res.status(404).json({ message: "token invalid" })

    }
}


