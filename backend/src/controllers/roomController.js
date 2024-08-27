import Room from '../models/roomModal.js';  
import {
    v2 as cloudinary
} from 'cloudinary';

import multer from 'multer'; 
import fs from "fs"


// Multer middleware'ini  // Yüklenen dosyaların kaydedileceği klasörü belirtin
const upload = multer({
    dest: 'uploads/'
});

// Dosya yükleme işlemiyle ilgili endpoint'i tanımlayın ve multer middleware'ını bu endpoint'e ekleyin
const createRoom = async (req, res) => {

    try {
        //cloudinary kayıt et image'yi
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath, {
                use_filename: true,
                folder: 'hotelApp',
            }
        );

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
            image_id: result.public_id,

        });

        //resim ekledikten sonra sil
        fs.unlinkSync(req.files.image.tempFilePath)

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


//get room
const getRoom = async (req, res) => {
    try {

        const room = (await Room.find()).reverse();

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

        //id gore odayı buluyor
        const photo = await Room.findById(req.params.id);

        if (!photo) return res.status(404).json({
            error: "Silinecek oda bulunamadı."
        });

        //resmin id'sini alıyor
        const imagePublicId = photo.image_id;

        //cloudinary'den resmi siliyor
        await cloudinary.uploader.destroy(imagePublicId);

        // gelen id ve db id gore siliyor
        await Room.findByIdAndDelete({
            _id: req.params.id
        });


        res.status(200).json({
            message: 'Oda başarıyla silindi'
        });

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

        const photo = await Room.findById(req.params.id);

        (req.body);
        const {
            title,
            category,
            description,
            price,
            capacity
        } = req.body;


        //resim yukleme
        const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
        const imagePublicId = photo.image_id;

        // Odayı güncellemek için findByIdAndUpdate kullanın
        const updatedRoom = await Room.findByIdAndUpdate(
            id, // Güncellenecek oda ID'si
            {
                title,
                category,
                description,
                image: result.secure_url,
                price,
                capacity,
                image_id: imagePublicId 

            }, // Güncellenecek oda verileri
            {
                new: true,
                runValidators: true
            } // Yeni veriyi döndür ve doğrulayıcıları çalıştır
        );

        fs.unlinkSync(req.files.image.tempFilePath)

        res.status(200).json({
            updatedRoom,
            message: "Oda başarıyla Güncellendi"
        });
    } catch (error) {
        console.log(error);
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