import Room from '../models/roomModal.js'; // Room modelini içe aktar
import {
    v2 as cloudinary
} from 'cloudinary'; // Cloudinary v2 sürümünü içe aktar
import multer from 'multer'; // multer modülünü içe aktar
import fs from "fs"


// Multer middleware'ini  // Yüklenen dosyaların kaydedileceği klasörü belirtin
const upload = multer({
    dest: 'uploads/'
});

// Dosya yükleme işlemiyle ilgili endpoint'i tanımlayın ve multer middleware'ını bu endpoint'e ekleyin
const createRoom = async (req, res) => {
    console.log("req.file", req.body);

    const image = req.body.image;

    try {
        //cloudinary kayıt et image'yi
        const result = await cloudinary.uploader.upload(image, {
            use_filename: true,
            folder: 'hotelApp',
        });

        console.log(result);

        const {
            category,
            description,
            price,
            capacity,
            Availability
        } = req.body;

        const room = await Room.create({
            image: result.secure_url,
            category,
            description,
            price,
            capacity,
            Availability,
        });

        // fs.unlinkSync(req.files.image.tempFilePath)

        res.status(200).json({
            success: true,
            message: "Oda başarıyla oluşturuldu."
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


// upload middleware'ını dışa aktar
export const uploadMiddleware = upload.single('image');


//get room
const getRoom = async (req, res) => {
    try {

        const room = await Room.find();

        res.status(200).json({
            success: true,
            room
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//room delete
const deleteRoom = async (req, res) => {

    try {
        const {
            id
        } = req.params
        const post = await Room.findByIdAndDelete({
            _id: id
        })
        console.log("basarıı silme ");
    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }



}
const updateRoom = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            title,
            category,
            description,
            img,
            price
        } = req.body;

        // Odayı güncellemek için findByIdAndUpdate kullanın
        const updatedRoom = await Room.findByIdAndUpdate(
            id, // Güncellenecek oda ID'si
            {
                title,
                category,
                description,
                img,
                price
            }, // Güncellenecek oda verileri
            {
                new: true,
                runValidators: true
            } // Yeni veriyi döndür ve doğrulayıcıları çalıştır
        );

        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


export {
    createRoom,
    getRoom,
    deleteRoom,
    updateRoom

}