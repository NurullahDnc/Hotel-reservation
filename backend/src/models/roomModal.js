import mongoose from 'mongoose'

const {
    Schema
} = mongoose;



const RoomSchema = new Schema({

    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
     },
     description: {
        type: String,
        required: true,
     },
     price: {
        type: Number,
        required: true,
    },
    capacity:{
        type: Number,
        required: true
    },
    Availability:{
        type: Boolean,
        required: true
    }

}, {
    timestamps: true,

});


const Room = mongoose.model('Room', RoomSchema);

export default Room;

