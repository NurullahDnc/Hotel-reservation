import mongoose from 'mongoose'

const {
    Schema
} = mongoose;

const GallerySchema = new Schema({

    image: {
        type: String,
        required: true,
    },
    image_id: {
        type: String,
    },

}, {
    timestamps: true,

});


const Gallery = mongoose.model('Gallery', GallerySchema);

export default Gallery;