const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //   const authHeader = req.headers.token;
  const authHeader = req.headers.token;

  //Check if there is a header in the token and verify it
  if (authHeader) {
    //Split the header since im using "Bearer" when i make the request o postman"
    const token = authHeader.split(" ")[1];
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
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("Not alowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    //Check if the user is the same as the one for the req or if its admin:
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("Not alowed, need admin properties");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
};
