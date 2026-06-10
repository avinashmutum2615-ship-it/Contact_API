import express from 'express'
import mongoose from 'mongoose' 
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from 'dotenv'



const app = express();

config({path:'.env'})

app.use(bodyParser.json());

app.use('/api/user', userRouter);

app.use('/api/contact',contactRouter);

app.get('/',(req,res)=>{
    res.json({
        message:'This is home route welcome'
    })
})






mongoose.connect(process.env.MONGO_URL,{
    dbName: "NodeJs_Contact_API"
}).then(()=>console.log('MongoDb Connected......!')).catch((err)=>console.log(err))



const port = process.env.PORT;
app.listen(port, ()=>console.log(`server is running on port ${port}`));