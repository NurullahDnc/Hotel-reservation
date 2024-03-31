import Feedback from "../models/feedbackModal.js";

const createFeedback = async (req, res) => {
    console.log("asdd", req.body);
    try {
        await Feedback.create(req.body);
        res.status(201).json({
            success: true,
            message: "Geri bildirim başarıyla oluşturuldu",
         });
    } catch (error) {
        console.error("Geri bildirim oluşturma hatası:", error);
        res.status(500).json({
            success: false,
            message: "Geri bildirim oluşturulurken bir hata oluştu"
        });
    }
};

const getFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json({
            success: true,
            message: "Geri bildirim başarıyla alındı",
            data: feedbacks
        });
    } catch (error) {
        console.error("Geri bildirim alımı hatası:", error);
        res.status(500).json({
            success: false,
            message: "Geri bildirim alınırken bir hata oluştu"
        });
    }
};

export {
    createFeedback,
    getFeedback
};
