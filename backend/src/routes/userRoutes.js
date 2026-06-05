import { Router } from "express";
import User from "../schema/userSchema.js";

let userRoutes = Router();

userRoutes
.route("/")// localhost:8001/users
.post(async (req, res, next) =>{
    // res.json("User created sucessfullly")
    /* 
    TOD DO 
    SEND DATA FORM POST MAN 
    GET DATA SENT BY POSTMAN
    SOTRE DATA IN USERTABLE
    */
//  
try{  
    let result = await User.create(req.body);
    
    res.json({
        success: true,
        message: "User created successfully",
        result: result
    })
}

    catch(error){
        res.json({
            success: false,
            message: "User creation failed",
            message: error.message
        })
    }

})
.get(async (req, res, next) => {

    try{
        let result = await User.find();
        res.json({
            success: true,
            message: "User fetched successfully",
            result: result
        })
    }   
    catch(error){
        res.json({
            success: false,
            message: "User fetching failed",
            message: error.message
        })
    }
})


userRoutes
.route("/:id")
.get(async (req, res, next) => {
    try{
        let result = await User.findById(req.params.id);
        res.json({
            success: true,
            message: "User fetched successfully",
            result: result
        })

    }
    catch(error){
        res.json({
            success: false,
            message: "User fetching failed",
            message: error.message
        })
    }
})
.patch(async(req, res, next) => {
    try{
        let result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "User updated successfully",
            result: result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: "User update failed",
            message: error.message
        })
    }
})
.delete(async (req, res, next) => {
    try{
        let result = await User.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "User deleted successfully",
            result: result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: "User deletion failed",
            message: error.message
        })
    }
})

export default userRoutes