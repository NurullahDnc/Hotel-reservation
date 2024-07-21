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
import fileUpload from 'express-fileupload';
import {v2 as cloudinary} from 'cloudinary'
import CommentRoute from './src/routes/commentRoute.js'
import FeedbackRoute from './src/routes/feedbackRoute.js'
import SendMailRoute from './src/routes/sendMailRoute.js'
import GalleryRoute from './src/routes/galleryRoute.js'
import ActivityRoute from './src/routes/activityRoute.js'
import RestaurantRoute from './src/routes/restaurantRoute.js'







dotenv.config();

//img yukleme
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET

})

//express olustur
const app = express();

conn();

// CORS middleware'ini uygulamaya ekle
app.use(cors());

//fileupload calıstırıyoruz?
app.use(fileUpload({useTempFiles: true}))

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
app.use("/comment", CommentRoute)
app.use("/feedback", FeedbackRoute)
app.use("/sendMail", SendMailRoute)
app.use("/gallery", GalleryRoute)
app.use("/activity", ActivityRoute)
app.use("/restaurant", RestaurantRoute)





app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});






app.listen(port, ()=>{
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});