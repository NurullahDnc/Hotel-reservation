import mongoose from 'mongoose'

const {
    Schema
} = mongoose;

const ActivitySchema = new Schema({

    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageOne: {
        type: String,
        required: true,
    },
    imageTwo: {
        type: String,
        required: true,
    },
    imageOne_id: {
        type: String,
    },
    imageTwo_id: {
        type: String,
    },

}, {
    timestamps: true,

});


const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;