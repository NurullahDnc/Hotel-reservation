import mongoose from 'mongoose'

const {
    Schema
} = mongoose;

const RestaurantSchema = new Schema({

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


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;