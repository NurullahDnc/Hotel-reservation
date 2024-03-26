import express from 'express'
import dotenv from 'dotenv'
import conn from './config/db.js'
import UserRoute from './src/routes/userRoute.js'
// import {checkUser} from './src/helpers/middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';  
import bodyParser from 'body-parser';
import { OAuth2Client } from 'google-auth-library'; 
import RoomRoute from './src/routes/RoomRoute.js'
import ReservationRote from './src/routes/reservationRoute.js'
import CategoriesRoute from './src/routes/categoriesRoute.js'




dotenv.config();

//express olustur
const app = express();

conn();

// CORS middleware'ini uygulamaya ekle
app.use(cors());


const port = process.env.PORT || 5000;

//Gelen isteklerdeki JSON verilerini işle
app.use(express.json());

//cookie ekleme 
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use("/user", UserRoute )
app.use("/room", RoomRoute )
app.use("/reservation", ReservationRote )
app.use("/categories", CategoriesRoute )






app.listen(port, ()=>{
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});