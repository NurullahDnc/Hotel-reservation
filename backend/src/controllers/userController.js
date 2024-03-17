import User from "../models/userModal.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
    createAccessToken,
    createRefreshToken
} from "../helpers/GenerateToken.js";

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
            user,
            message: "Giriş başarılı"
        });



    } catch (error) {
        res.status(400).json({
            succeded: false,
            error: error.message
        })
    }

}


export {
    createUser,
    loginUser
}