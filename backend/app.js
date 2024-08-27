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
import ReservationRoute from './src/routes/reservationRoute.js'  // Typo düzeltildi
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

// Cloudinary yapılandırması
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Express uygulaması oluştur
const app = express();

// Veritabanı bağlantısı
try {
    conn();
} catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
    process.exit(1);
}

// Loglama middleware'i
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// CORS middleware'i
app.use(cors());

// File upload middleware'i
app.use(fileUpload({useTempFiles: true}));

// JSON ve URL-encoded middleware'leri
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Rota tanımlamaları
app.use("/user", UserRoute);
app.use("/room", RoomRoute);
app.use("/reservation", ReservationRoute);  // Typo düzeltildi
app.use("/categories", CategoriesRoute);
app.use("/comment", CommentRoute);
app.use("/feedback", FeedbackRoute);
app.use("/sendMail", SendMailRoute);
app.use("/gallery", GalleryRoute);
app.use("/activity", ActivityRoute);
app.use("/restaurant", RestaurantRoute);

// Global hata yakalama middleware'i
app.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Hata:`, err.stack);
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
});

// Beklenmeyen hataları yakalama
process.on('uncaughtException', (err) => {
    console.error('Beklenmeyen Hata:', err);
    // Uygulamanın çökmesini önleyebilir veya loglayabilirsiniz
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Yakalnamamış Vaad Hatası:', reason);
    // Yakalnamamış söz hatalarını loglayabilir veya yönetebilirsiniz
});

// Sunucuyu başlat
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});
