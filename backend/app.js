import express from 'express'
import dotenv from 'dotenv'
import conn from './config/db.js'
import UserRoute from './src/routes/userRoute.js'
import {checkUser} from './src/helpers/middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // cors modülünü import et
import bodyParser from 'body-parser';


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

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use("/user", UserRoute )


// "/user" rotaları dışında yapılan isteklerde res.locals.user'ı kontrol etmek
app.use("*", checkUser,  (req, res, next) => {
    
    console.log("Giriş yapan kullanıcı bilgileri:", res.locals.user);
    next();
});

app.use("/", (req, res)=>{

    res.send("merhaba")
} )
 


app.listen(port, ()=>{
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
});