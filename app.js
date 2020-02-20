const express=require("express");
const proRouter=require("./routes/pro.js");
const bodyParser=require("body-parser");

// 引入路由模块
let app=express();
app.listen(5050);
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
  extended:false
}));

/*使用路由器来管理路由*/
app.use("/public",proRouter);
