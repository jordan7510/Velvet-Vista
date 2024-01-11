import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const checkAuthMiddleware = (req, res) => {
  try {
    const token = req.body.token;
    const jwt_secret = process.env.JWT_SECRET;
    
    if (!token) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }

    jwt.verify(token, jwt_secret, (err, decoded) => {
      if (err) {
        res.status(502).json({"message":"User authentication failed", err})
      } else {
        res.status(200).json({"success": true,userInfo:decoded})
      }
    });

  } catch (error) {
    console.error("Error verifying access token:", error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
};

export default checkAuthMiddleware;
