import  dns from 'dns'

dns.setServers (["8.8.8.8", "1.1.1.1"])
import express from 'express';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import Blogs from './models/UserSchema.js';
import authroute from './routes/AuthRoutes.js';

const app = express () //server create kiya

 dotenv.config()

 connectdb()

 console.log(process.env.MONGOURI);

 app.use(express.json());

 app.get('/', (req, res) =>{
    res.json({
        message: "Successfull get blogs"
    });
 });

//  api/v1/auth/
app.use('/api/v1/auth', authroute);  //jo routes hn sb authroutes me hain yah sy attach hn

app.listen(process.env.Port, () =>{
    console.log("server is runnig --->", process.env.Port)
});