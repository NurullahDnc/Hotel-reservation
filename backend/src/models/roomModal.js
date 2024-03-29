import mongoose from 'mongoose'

const {
    Schema
} = mongoose;



const RoomSchema = new Schema({

    image: {
        type: String,
        // required: true,
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
        type: String,
        required: true,
    },
    capacity:{
        type: String,
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

