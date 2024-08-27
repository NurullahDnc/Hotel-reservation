import Restaurant from '../models/restaurantModal.js';  
import {
    v2 as cloudinary
} from 'cloudinary';

import fs from "fs"



const createRestaurant = async (req, res) => {
    try {
        // İlk resmi yükle
        const result1 = await cloudinary.uploader.upload(
            req.files.imageOne.tempFilePath, {
                use_filename: true,
                folder: 'hotelApp',
            }
        );

        // İkinci resmi yükle
        const result2 = await cloudinary.uploader.upload(
            req.files.imageTwo.tempFilePath, {
                use_filename: true,
                folder: 'hotelApp',
            }
        );

        const {
            title,
            description,
        } = req.body;

        await Restaurant.create({
            //iki farklı image, cloudinary'den gelen id'leri atıyoruz
            imageOne: result1.secure_url,
            imageOne_id: result1.public_id,
            imageTwo: result2.secure_url,
            imageTwo_id: result2.public_id,
            title: title,
            description: description
        });

        fs.unlinkSync(req.files.imageOne.tempFilePath);
        fs.unlinkSync(req.files.imageTwo.tempFilePath);

        res.status(200).json({
            success: true,
            message: "Restorant başarıyla oluşturuldu."
        });

    } catch (error) {
         res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


const getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find();  
        

        res.status(200).json({
            success: true,
            data: restaurant
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const DeleteActivity = async (req, res) => {

 
    try {
       const restaurant = await Restaurant.findById(req.params.id);

      if (!restaurant) return res.status(404).json({
          error: "Silinecek Aktivite bulunamadı."
      });

      //resmin id'sini alıyor
      const imageOnePublicId = restaurant.imageOne_id;
      const imageTwoPublicId = restaurant.imageTwo_id;

        //cloudinary'den resmi siliyor
        await cloudinary.uploader.destroy(imageOnePublicId);
        await cloudinary.uploader.destroy(imageTwoPublicId);


 
      // gelen id ve db id gore siliyor
      await Restaurant.findByIdAndDelete({
          _id: req.params.id
      });


      res.status(200).json({
          message: 'Restaurant başarıyla silindi'
      });
    } catch (error) {
         res.status(500).json({
            error: error.message
        });
    }
}

const updateRestaurant = async (req, res) => {
     
    try {

        const {
            id
        } = req.params;

        const photo = await Restaurant.findById(req.params.id);

        (req.body);
        const {
            title,
            description,
            
        } = req.body;


        //resim güncelleme
        const resultOne = await cloudinary.uploader.upload(req.files.imageOne.tempFilePath);
        const imageOnePublicId = photo.imageOne_id;

        const resultTwo = await cloudinary.uploader.upload(req.files.imageTwo.tempFilePath);
        const imageTwoPublicId = photo.imageTwo_id;

        // Odayı güncellemek için findByIdAndUpdate kullanın
        const updatedRoom = await Restaurant.findByIdAndUpdate(
            id, // Güncellenecek oda ID'si
            {
                title,
                description,
                imageOne: resultOne.secure_url,
                imageTwo: resultTwo.secure_url,

           
                imageOne_id: imageOnePublicId,
                imageTwo_id: imageTwoPublicId 


            }, 
            {
                new: true,
                runValidators: true
            }  
        );

        fs.unlinkSync(req.files.imageOne.tempFilePath)
        fs.unlinkSync(req.files.imageTwo.tempFilePath)

        res.status(200).json({
            updatedRoom,
            message: "Restaurant başarıyla Güncellendi"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};


export {
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    DeleteActivity
}