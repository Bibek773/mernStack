import { Router } from "express";
import School from "../schema/schoolSchema.js";

const schoolRoutes = Router();
schoolRoutes
.route("/")
.post(async (req, res, next)=> {
    try{
        let result = await School.create(req.body);

        res.json({
            success: true,
            message: "School created successfully",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.get(async (req, res, next)=> {
    try{
        let result = await School.find({});

        res.json({
            success: true,
            message: "School retrieved successfully",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})


schoolRoutes
.route("/:id")
.get(async (req, res, next)=> {
    try{
        let result = await School.findById(req.params.id);

        res.json({
            success: true,
            message: "School retrieved successfully",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.patch(async (req, res, next)=> {
    try{
        let result = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json({
            success: true,
            message: "school updated successfully",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})
.delete(async (req, res, next)=> {
    try{
        let result = await School.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "School deleted successfully",
            result: result
        })
    }
    catch(error){   
        
        res.json({
            success: false,
            error: error.message
        })
    }
})

export default schoolRoutes
