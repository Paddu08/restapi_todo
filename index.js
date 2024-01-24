const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')

const port=8080;

const todoRoutes=require("./routes/Todo")

const app=express()

mongoose.connect("mongodb+srv://paddugenius123:admin@cluster0.evrgtzd.mongodb.net/mongodb://localhost:27017/",
{
    newUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>console.log("successfully connected to db"))
.catch(console.error)

app.use(cors)
app.use("/api",todoRoutes)

app.listen(port,()=>console.log("listening to port"))
