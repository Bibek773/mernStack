/* to make API :->
S1 :make Router
S2 :make controller
*/
import express, { json } from "express"
import firstRoute from "./src/routes/firstRoutes.js"
import productRoutes from "./src/routes/productRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import mongoose from "mongoose"
import schoolRoutes from "./src/routes/schoolRoutes.js"
let app = express()
app.listen(8001,()=>{
console.log("application is listening at port 8001")
mongoose.connect("mongodb://localhost:27017/cosmos")

})
app.use(json())   // make our backend to take data from postman
app.use(firstRoute)
app.use("/product", productRoutes)
app.use("/user", userRoutes)
app.use("/school", schoolRoutes)