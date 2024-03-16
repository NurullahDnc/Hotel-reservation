import User from "../models/userModal.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        const existingUser = await User.findOne({ email });

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
        const hashedPassword = await bcrypt.compare(password, user.password);

        //pass. kontrol
        if (!hashedPassword) {
            return res.status(401).json({
                success: false,
                error: "şifre yanlış!"
            })
        }

        //token olusturma
        const token = createToken(user._id);

        //token'i cookie'ye kayıt ediyor
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, //1 gun
        })

        console.log("teoken", token);

        res.status(200).json({
            success: true,
            token,
            message: "Giriş başarılı"
        });


    } catch (error) {
         res.status(400).json({
            succeded: false,
            error: error.message
        })
     }

}

//userId'ye gore token olsuturma
const createToken = (userId) => {

    return jwt.sign({
        userId
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

}





export {
    createUser,
    loginUser
}