import express from "express"
const app = express();

app.get("/",function(req:any,res:any){
res.send("docker-image-running");
}
)

app.listen(3000,(()=>{
  console.log("server started");
}))