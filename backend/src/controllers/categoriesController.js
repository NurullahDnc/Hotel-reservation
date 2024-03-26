
import Categories from "../models/categoryModal.js";

const createCategories = async (req, res) => {
    try {

        await Categories.create(req.body);
        res.status(200).json({
            success: true,
            message: "kategori başarıyla oluşturuldu."
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

const getCategories = async (req, res) =>{

    try {
        const categories = await Categories.find();
        
        res.status(201).json({
            success: true,
            categories
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}


export {
    createCategories,
    getCategories
}