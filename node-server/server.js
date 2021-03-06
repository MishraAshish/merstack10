let express = require("express");
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 

let cors = require("cors");

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRoute");
//mounting of express application
let adminApp = express(); //initialization of express admin application
let adminRouter = require("./routes/adminRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

let productApp = express();
let productRouter = require("./routes/productRouter");

let cartApp = express();
let cartRouter = require("./routes/cartRouter");


app.use(cors()) //setting cross origin access to true in our express api's
// serve static files like images css using static middleware
//app.use("/static", express.static("public"))
app.use("/static", express.static("public"))

app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type to json in body

app.use("/admin", adminApp);
adminApp.use("/", adminRouter)


app.use("/user", userApp); //signin api path => localhost:9000/user/api/signinup
userApp.use("/", userRouter);

app.use("/product", productApp); //signin api path => localhost:9000/product/api/saveproduct
productApp.use("/", productRouter);

app.use("/cart", cartApp); 
cartApp.use("/", cartRouter);


app.use("/",defaultRouter);

app.listen(port, ()=> console.log(`server is listing as port ${port}`))