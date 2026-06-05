import {Schema, model} from 'mongoose';
let schoolSchema = Schema({
    name: {
        type : String,
        required :[true, "Name is required"]
    },
    address: {
        type : String,
        required :[true, "address is required"]
    },

    phone: {
        type : String,
        required :[true, "phone is required"]
    },
    email: {
        type : String,
        required :[true, "email is required"]
    },
    noOfRooms: {
        type : String,
        required :[true, "No of room is required"]
    }

})

let School= model("School", schoolSchema)
export default School