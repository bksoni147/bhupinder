let express=require("express")
let app=express()
let socket=require("socket.io")
app.get("/",(req,res)=>{
    res.sendfile("index.html")

})
let server=app.listen(3000)
let io=socket(server)
io.on("connect",(socket)=>{
    console.log("a user connected")
})