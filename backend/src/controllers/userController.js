import User from "../models/userModal.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
    createAccessToken,
    createRefreshToken
} from "../helpers/GenerateToken.js";
import {
    OAuth2Client
} from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const createUser = async (req, res) => {

    try {
        //body'den verileri al
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        //kulanıcı kontrol et uye mi
        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "bu kullanıcı zaten kayıtlı"
            })
        }

        //pass. hash'le
        const hashedPassword = await bcrypt.hash(password, 10);


        //user olsutur
        const user = await User.create({
            firstName,
            lastName,
            email: email,
            password: hashedPassword,
        })

        res.status(201).json({
            succeded: true,
            message: "Üyelik başarıyla oluşturuldu."
        })

    } catch (error) {

        res.status(400).json({
            succeded: false,
            error: error.message
        })

    }
}

const loginUser = async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body;

        //user email kontol et varmı
        const user = await User.findOne({
            email: email
        })

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Kullanıcı bulunamadı',
            });
        }

        //pass. karsılastırma
        const validPassword = await bcrypt.compare(password, user.password);

        //pass. kontrol
        if (!validPassword) {
            return res.status(401).json({
                success: false,
                error: "şifre yanlış!"
            })
        }

        //kulanıcının ıd gore token olusturuyor.
        const accessToken = createAccessToken({
            id: user._id
        });

        // Yenileme tokeninin kullanıcıya gönderilmesi, X
        res.cookie('jwt', accessToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 gün
        });


        res.status(200).json({
            success: true,
            accessToken,
            message: "Giriş başarılı"
        });



    } catch (error) {
        res.status(400).json({
            succeded: false,
            error: error.message
        })
    }

}

export const getInfo = async (req, res) => {

    try {
        // kulanıcının sifreisni gonderme
        const user = await User.findById(req.user.id).select('-password')

        //kulanıcı yoksa
        if (!user) return res.status(400).json({
            error: "Kullanıcı mevcut değil."
        });

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


// Google ile giriş veya kayıt olma işlemi
export const googleAuth = async (req, res) => {

    const {
        token
    } = req.body;
    try {

        //token dogrula, karsılastır
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const {
            email,
            given_name,
            family_name
        } = ticket.getPayload();

        //kulanıcıyı kontrol et 
        let user = await User.findOne({
            email
        });


        if (!user) {
            // Eğer kullanıcı yoksa, kayıt et
            const hashedPassword = await bcrypt.hash(token, 10);
            user = await User.create({
                firstName: given_name,
                email,
                password: hashedPassword,
                googleId: ticket.getUserId()
            });
        }

        // Kullanıcıya token olustur, client gonder cookie kayıt et
        const accessToken = createAccessToken({
            id: user._id
        });

        res.status(200).json({
            success: true,
            message: 'Giriş başarılı',
            accessToken
        });
    } catch (error) {
        console.error('Google Auth Hatası:', error);
        res.status(401).json({
            success: false,
            message: 'Google ile giriş başarısız'
        });
    }
};




export {
    createUser,
    loginUser
}