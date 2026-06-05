import { Schema, model } from "mongoose";
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }

})

let User = model("User", userSchema);

export default User
