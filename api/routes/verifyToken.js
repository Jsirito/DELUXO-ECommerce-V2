const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
  const authHeader = req.headers.token;

  //Check if there is a header in the token and verify it
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
      if (err) {
        res.status(403).send("Token not valid");
      } else {
        //Asing user verifyed to the req.user
        req.user = userData;
        next();
      }
    });
  } else {
    return res.status(401).send("You are not authenticated");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    //Check if the user is the same as the one for the req or if its admin:
    if (req.user === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("Not alowed");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth };
