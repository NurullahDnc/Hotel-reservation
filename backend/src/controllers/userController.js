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
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "bu kullanıcı zaten kayıtlı"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
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


        if (user && user.status === false) {
            return res.status(401).json({
                success: false,
                error: 'Kullanıcı devre dışı bırakıldı!'
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

const adminLogin = async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body

        const user = await User.findOne({
            email: email
        })

         
        if (!user &&  user.role != "admin") {
            res.status(400).json({
                succeded: false,
                error: "Kulanıcı adı veya sifre hatalıdır"
            })
        } 

        const validPassword = await bcrypt.compare(password, user.password);
        
        if(!validPassword){
            res.status(400).json({
                succeded: false,
                error: "Kulanıcı adı veya sifre hatalıdır"
            })
        }

        const accessToken = createAccessToken({
            id: user._id
        });

        res.status(200).json({
            success: true,
            accessToken,
            message: "Giriş başarılı"
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            succeded: false,
            error: error.message
        })
    }
}

const getuser = async (req, res) => {
    try {
        // Kullanıcıları veritabanından al
        const users = await User.find();

        const formattedUsers = users.map(user => ({
            ...user.toObject(),
            createdAt: user.createdAt.toISOString().slice(0, 19).replace('T', ' '),
            updatedAt: user.updatedAt.toDateString()
        })).reverse();

        res.status(200).json(formattedUsers);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
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

        if (user) {
            console.log("user var ", user);
        }


        if (user && user.status === false) {
            return res.status(401).json({
                success: false,
                error: 'Kullanıcı devre dışı bırakıldı!'
            });
        }

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

const activateUserAccount = async (req, res) => {

    try {
        // rezervasyonun gelen ıd gore guncelle, durumunu approved yap
        const reservation = await User.findByIdAndUpdate(req.params.id, {
            status: 'true'
        }, {
            new: true
        });

        return res.json({
            reservation,
            message: 'Kulanıcı Aktif Edildi',

        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Kulanıcı aktif edilirken bir hata oluştu'
        });
    }
};

const deactivateUserAccount = async (req, res) => {

    try {
        // rezervasyonun gelen ıd gore guncelle, durumunu approved yap
        const status = await User.findByIdAndUpdate(req.params.id, {
            status: 'false'
        }, {
            new: true
        });

        return res.json({
            status,
            message: 'Kullanıcı devre dışı bırakıldı.',

        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Kullanıcı devre dışı bırakılırken hata oluştu'
        });
    }
};




export {
    createUser,
    loginUser,
    getuser,
    activateUserAccount,
    deactivateUserAccount,
    adminLogin
}