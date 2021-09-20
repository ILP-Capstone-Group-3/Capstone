const express = require("express");
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
const cors = require("cors");
let userRouter = require("./router/user.router")

let app = express();

var corsOptions = {
    origin: "http://localhost:4200" // Must be the port the angular project runs on
};

//add middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())


const db = require("./models");
// Connect to the database
 db.mongoose
     .connect(db.url, {
         useNewUrlParser: true,
         useUnifiedTopology: true
     })
     .then(()=> {
         console.log("Database connected.");
    })
    .catch(()=> {
         console.log("Cannot connect to the database.", err);
         process.exit();
     });


// **************************
// let url = "mongodb://localhost:4200"

// mongoose.connect(url).then(res=> console.log("connected")).
// catch(error => console.log(error))

// app.use("/api/product", userRouter)



// ************************



// This part is probably not important, but something might break 
// if it gets deleted, so let's keep it
app.get("/", (request,response)=> {
    response.json({message:"Simple web app"});
});

// Add any additional database routers below
require("./router/user.router")(app);
require("./router/employee.router")(app);
require("./router/reports.router")(app);

//http://localhost:9090/api/user/CartItems
app.use("/api/users", userRouter)

app.listen(9090, ()=> {
    console.log("Server is running on port 9090");
});
