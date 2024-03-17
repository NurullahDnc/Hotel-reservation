import User from '../../models/userModal.js';
import jwt from 'jsonwebtoken';

// Kullanıcı oturumunu kontrol etmek için bir ara yazılım (middleware) oluşturun
//token buluyor, token varsa kontol eder, tokenden kulanıcıyı alır ve locals'a atar
const checkUser = async (req, res, next) => {
    //cookies icinde jwt al degisekene at
    const token = req.cookies.jwt;
    console.log("tokenmidel", token);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next(); // Bir sonraki işlevi çağır
            } else {
                // Token'dan çözümlenen token'dan kullanıcı kimliğini al
                const user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next(); // Bir sonraki işlevi çağır
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};


//token dogrulama islemi, token cozerek kulanıcı bilgilerini alır, kulanıcıyı bulur 
const authenticateToken = async (req, res, next) => {

    try {

        // Token'i çerezlerden al
        const token = req.cookies.jwt;

        if (token) {
            // Token'i çözümle
            const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
            // Çözümlenen token'dan kullanıcı kimliğini al
            const user = await User.findById(decodedToken.userId);
            req.user = user;
            next();
        } else {
            res.redirect("/login")
        }

    } catch (error) {
        return res.status(401).json({
            succeeded: false,
            Error: "invalid token"
        });
    }

};


export {
    authenticateToken,
    checkUser
};