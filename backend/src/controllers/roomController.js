
import Room from '../models/roomModal.js'

//create room
const createRoom = async (req, res) => {
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
const deleteRoom = async (req, res)=>{

    const room = await Room.findById(req.params.id);

    //oda yoksa ve uzunlugu 0 ise
    if (!room || room.length === 0 ) {
        res.status(404).json({
            success: false,
            message: "silincek oda bulunamadı"
        })
    }


}

export {
    createRoom,
    getRoom,
    deleteRoom,


}