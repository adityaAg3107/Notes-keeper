var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Adityaisagoodb$oy';

const fetchuser = (req, res, next) => { // next => agla jo function hai middleware ke baad 
    //wo call ho jayega i.e. async fun. in route 3
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');// token ko auth-token naam ke header me save kiya
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; // token se user le aaye
        next(); // next function call karega
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;