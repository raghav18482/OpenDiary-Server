const express = require("express");
const mongoose= require("mongoose");
const port = process.env.PORT|| 5000;
const app=express();

mongoose.connect("mongodb+srv://bloguser:8107037133@cluster0.fpppn.mongodb.net/MyAppDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDb connected");
});

//middleware
app.use("/uploads",express.static("uploads"));//to make folder static so taht it is accicible from browser
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);



data = {
    msg: "Welcome on DevStack open diary App development ",
    info: "This is a root endpoint",
    Working: "Documentations of other endpoints will be release soon :)",
    request:
      "keep exploring ",
  };
  

app.route("/").get((req,res)=> res.json(data));

app.listen(port, "0.0.0.0", () =>
  console.log(`welcome your listinnig at port ${port}`)
);
