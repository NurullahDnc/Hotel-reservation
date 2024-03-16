import express from 'express'
import dotenv from 'dotenv'
import conn from './config/db.js'
import UserRoute from './src/routes/userRoute.js'
import {checkUser} from './src/middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // cors modülünü import et


const app = express();

conn();

// CORS middleware'ini uygulamaya ekle
app.use(cors());

dotenv.config();

const port = process.env.PORT || 5000;

//veriyi json formatında isliyor
app.use(express.json());

//cookie ekleme 
app.use(cookieParser());



app.use("/user", UserRoute )
app.use("*",  checkUser)
 


app.listen(port, ()=>{
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});