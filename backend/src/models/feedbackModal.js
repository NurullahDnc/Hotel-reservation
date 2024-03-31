import mongoose from 'mongoose'

const {
    Schema
} = mongoose;


const FeedbackSchema = new Schema({

    surname: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    object: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }

}, {
    timestamps: true,

});


const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;