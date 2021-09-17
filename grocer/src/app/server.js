const express = require("express");
const cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

const app = express();


//router modules
var Product = require("./router/product.router.js");
var Employee = require("./router/employee.router.js");
var User = require("./router/user.router.js");
var Admin = require("./router/admin.router.js");


//Database URL Details 
let url = "mongodb://127.0.0.1:27017/Group_3_Database";


var corsOptions = {
    origin: "http://localhost:4200" // Must be the port the angular project runs on
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

// This part is probably not important, but something might break 
// if it gets deleted, so let's keep it
app.get("/", (request,response)=> {
    response.json({message:"Simple web app"});
});

app.use('', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});

// Add any additional database routers below
require("./router/user.router")(app);
require("./router/employee.router")(app);
require("./router/reports.router")(app);
require("./router/order.router")(app);


// router redirects
app.use("/product",Product);
app.use("/user",User);
app.use("/employee",Employee);
app.use("/admin", Admin);



app.listen(9090, ()=> {
    console.log("Server is running on port 9090");
});
