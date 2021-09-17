//load all modules
let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let cors = require("cors")
let ticketProduct = require("./router/ticket.router")

//create the reference of express
let app = express()

//add middleware
app.use(cors())
app.use(bodyParser.json())

//url database
let url = "mongodb://localhost:27017/Group3Database"

//connect the database
mongoose.connect(url).then(res=> console.log("connected")).
catch(error => console.log(error))

//middleare which help to match main path and pass the
//request to router file
//http://localhost:9090/api/product/getAllProducts     Get
//http://localhost:9090/api/product/storeProduct       Post
//http://localhost:9090/api/deleteProduct              Delete
//http://localhost:9090/api/updateProduct              Update
app.use("/api/ticket", ticketProduct)



app.listen(9090, ()=> console.log("Server running on port number 9090"))