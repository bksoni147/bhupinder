let express=require("express")
let app=express()
let socket=require("socket.io")


let server=app.listen(3000,()=>{
   console.log("listening..........")
});
app.get("/",(req,res)=>{
   res.sendfile("index.html")
})
let io=socket(server)
io.on("connection",(socket)=>{
   console.log("a user connected");
   socket.on("client",(data)=>{
        socket.broadcast.emit("ji",data)
   })

})
