import Activity from '../models/activityModal.js';  
import {
    v2 as cloudinary
} from 'cloudinary';

import fs from "fs"



const createActivity = async (req, res) => {
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

        await Activity.create({
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
            message: "Aktivite başarıyla oluşturuldu."
        });

    } catch (error) {
         res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


const getActivity = async (req, res) => {
    try {
        const activity = await Activity.find();  
        

        res.status(200).json({
            success: true,
            data: activity
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

const DeleteActivity = async (req, res) => {

    console.log("Activity", Activity);

    try {
       const activity = await Activity.findById(req.params.id);

      if (!activity) return res.status(404).json({
          error: "Silinecek Aktivite bulunamadı."
      });

      //resmin id'sini alıyor
      const imageOnePublicId = activity.imageOne_id;
      const imageTwoPublicId = activity.imageTwo_id;

        //cloudinary'den resmi siliyor
        await cloudinary.uploader.destroy(imageOnePublicId);
        await cloudinary.uploader.destroy(imageTwoPublicId);


 
      // gelen id ve db id gore siliyor
      await Activity.findByIdAndDelete({
          _id: req.params.id
      });


      res.status(200).json({
          message: 'Aktivite başarıyla silindi'
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
}

const updateActivity = async (req, res) => {
     
    try {

        const {
            id
        } = req.params;

        const photo = await Activity.findById(req.params.id);

        (req.body);
        const {
            title,
            description,
            
        } = req.body;


        //resim yukleme
        const resultOne = await cloudinary.uploader.upload(req.files.imageOne.tempFilePath);
        const imageOnePublicId = photo.imageOne_id;

        const resultTwo = await cloudinary.uploader.upload(req.files.imageTwo.tempFilePath);
        const imageTwoPublicId = photo.imageTwo_id;

        // Odayı güncellemek için findByIdAndUpdate kullanın
        const updatedRoom = await Activity.findByIdAndUpdate(
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
            message: "Aktivite başarıyla Güncellendi"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
};


export {
    getActivity,
    createActivity,
    updateActivity,
    DeleteActivity
}