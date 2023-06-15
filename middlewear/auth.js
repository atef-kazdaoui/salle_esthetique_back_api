const jwt = require('jsonwebtoken');
require('dotenv').config();
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'Token missing from request header.' });
  }
  jwt.verify(token,process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ auth: false, message: 'Invalid token.' });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
