import jwt from "jsonwebtoken"
import { errorHandler } from "./errorHandler.js";


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    const id = req.params.id;
    const body = req.body;

    console.log("request token", token);
    // console.log("request id", id);
    // console.log("request body", body);

    if(!token){
        return next(errorHandler(401,"Not authorized"))
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(errorHandler(403,"Token is not valid"))
        }
        // Update the req from client side:
        req.user = user
        next()
    })
}


