import Room from '../models/roomModal.js'

//create room
const createRoom = async (req, res) => {

    console.log("data", req.body);

    try {

        const room = await Room.create(req.body);
        res.status(200).json({
            success: true,
            message: "Oda başarıyla oluşturuldu."
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

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
        const { id } = req.params;  
        const { title, category, description, img, price } = req.body;  

        // Odayı güncellemek için findByIdAndUpdate kullanın
        const updatedRoom = await Room.findByIdAndUpdate(
            id, // Güncellenecek oda ID'si
            { title, category, description, img, price }, // Güncellenecek oda verileri
            { new: true, runValidators: true } // Yeni veriyi döndür ve doğrulayıcıları çalıştır
        );

         res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    createRoom,
    getRoom,
    deleteRoom,
    updateRoom

}