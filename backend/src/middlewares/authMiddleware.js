import User from '../models/userModal.js';
import jwt from 'jsonwebtoken';


//token dogrulama islemi, token cozerek kulanıcı bilgilerini alır, kulanıcıyı bulur 
const authenticateToken = async (req, res, next) => {

    try {

        // Token'i cookieden al
        const token = req.cookies.jwt;
        if (token) {
            // Token'i çözümle, karsılastır
            const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

            // kulanıcı varmı 
            const user = await User.findById(decodedToken.userId);

            req.user = user;
            next();
        } else {
            res.redirect("/")
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
 };