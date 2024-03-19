import User from "../models/userModal.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {

    try {
        //body'den verileri al, pass. hash'le
        const { name, email, password } = req.body;

        //pass. hash'le degiskene at
        const hashedPassword = await bcrypt.hash(password, 10);

        //user olsutur, degerleri ata
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        res.status(201).json({
            succeded: true,
            user
        })

    } catch (error) {

        res.status(400).json({
            succeded: false,
            error
        })

    }
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        //user ara email'e gore
        const user = await User.findOne({
            email: email
        })


        //user varmı varsa, pass. karsılastır
        if (user && await bcrypt.compare(password, user.password)) {

            //userId func. parametre gec. degisekene at
            const token = createToken(user._id);
            console.log("token olustuldu", token);

            //token'i cookie'ye kayıt ediyor
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24, //1 gun
            })

            return res.status(200).json({
                success: true
            })

        } else {
            return res.status(401).json({
                success: false,
                error: "kulanıcı adı veya sifre hatalıdır"

            })
        }

    } catch (error) {
        res.status(400).json({
            succeded: false,
            error: error.message
        })
        console.log("error", error);
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