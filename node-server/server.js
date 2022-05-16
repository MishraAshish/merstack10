console.log("Server Js is referenced!!")
let express = require("express");
let port = 9000; 

let app = express();//instantiating express application 

app.get("/",(req, res)=>{
    res.send("Toan's first api!!")
})

app.get("/userinfo",(req, res)=>{
    res.json({
        "name":"Toan",
        "age" : 101,
        "session" : "MERNStack"
    })
})


app.listen(port, ()=> console.log(`server is listing as port ${port}`))