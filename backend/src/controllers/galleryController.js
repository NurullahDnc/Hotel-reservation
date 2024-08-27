import Gallery from '../models/galleryModal.js';  
import {
    v2 as cloudinary
} from 'cloudinary';

import multer from 'multer'; 
import fs from "fs"

const upload = multer({
    dest: 'uploads/'
});


const createGallery = async (req, res) => {

    try {
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath, {
                use_filename: true,
                folder: 'hotelApp',
            }
        );

        const gallery = await Gallery.create({
            image: result.secure_url,
            image_id: result.public_id,

        });

        fs.unlinkSync(req.files.image.tempFilePath)

        res.status(200).json({
            success: true,
            message: "Resim başarıyla oluşturuldu."
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find();  
        const formattedGallery = gallery.map(item => ({
            id: item._id,  
            ...item.toObject(), // Reservation nesnesinin tüm özelliklerini kopyala
            createdAt: new Date(item.createdAt).toLocaleDateString("tr-TR")  
        })).reverse();

        res.status(200).json({
            success: true,
            data: formattedGallery
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const galleryDelete = async (req, res) => {

    try {
        const {
            id
        } = req.params
        await Gallery.findByIdAndDelete({
            _id: id
        })
        res.status(200).json({
            success: true,
            message: "resim başarıyla silindi"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const updateGallery = async (req, res) => {
    console.log("image", req.files);
    
    try {
        const { id } = req.params;
        const { image } = req.files;

        // Yeni resmi bulut depolama sağlayıcısına (Cloudinary) yükle
        const result = await cloudinary.uploader.upload(image.tempFilePath, {
            use_filename: true,
            folder: 'hotelApp',
        });

        // veritabanında güncelle
        await Gallery.findByIdAndUpdate(id, {
            image: result.secure_url,
            image_id: result.public_id,
        });

        fs.unlinkSync(req.files.image.tempFilePath)

        res.status(200).json({
            success: true,
            message: "Resim başarıyla güncellendi.",
        });
    } catch (error) {
         res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


export {
    createGallery,
    getGallery,
    galleryDelete,
    updateGallery
}