import User from "../models/user.models.js";
import bcryptjs from "bcryptjs"
import jwt  from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export const signup=(async(req,res,next)=>{
    try {
        const {name,email,password}= req.body
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = new User({name,email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({'message':"user created successfully"})    
    } catch (error) {
        console.error("Error creating user", error)
        res.status(400).send("Error signing up")
    }
})

// export const checkPhone = async (req, res, next)=>{
//     try {
//         const {phone} =req.body;
//         const phoneResult = await User.findOne({phone:phone})
//         if(phoneResult){
//             res.json({'success': false,'message':'Phone already registered'})
//         }else{
//             res.json({'success': true})
//         } 
//     } catch (error) {
//         console.error("Error finding phone number", error)
//         res.status(400).send("Error finding phone number", error)
//     }
// }

export const checkEmail = async (req, res, next)=>{
    try {
        const {email} = req.body;
        const emailResult = await User.findOne({email:email})
        if(emailResult){
            res.json({'success': false,'message':'Email already registered'})
        }else{
            res.json({'success': true})
        } 
    } catch (error) {
        console.error("Error finding email", error)
        res.status(400).send("Error finding email", error)
    }
}

export const signin = async (req, res, next)=>{
    try {
        const {email,password} = req.body;
        const validUser = await User.findOne({email:email})
        if(!validUser){
           return res.status(404).json({"message":"User not found"})
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword){
            return res.status(401).json({"message":"Invalid Credentials"})
        }
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET );
        const {password: Hashed_Password, ...rest}= validUser._doc
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour in milliseconds
        res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest)
      
    } catch (error) {
        console.error("Error finding email", error)
        res.status(400).send("Error finding email", error)
    }
}

export const google = async (req,res)=>{

    try {
        // check email before signin
        const user = await User.findOne({email:req.body.email})
        if(user){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            const {password: Password, ...rest} = user._doc
            const expiryDate  = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest)
        }
        else{
            const {name,email,profilePicture} = req.body;
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatedPassword,10)
            const newUser = new User({name,email,password:hashedPassword,profilePicture:profilePicture})
            const createUser = await newUser.save()
            const token = jwt.sign({id:createUser._id}, process.env.JWT_SECRET)
            const {password: Password, ...rest} = createUser._doc
            const expiryDate  = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest)
            }
    } catch (error) {
        console.error("Google signin/singup error", error)
        res.status(400).send("Google signin/singup error", error)
    }

}   


export const signout = (req,res)=>{
    res.clearCookie("access_token,").status(200).json("Signout success")
}