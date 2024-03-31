import mongoose from "mongoose";

const {
    Schema
} = mongoose;


const commentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    rating: {
        type: Number,
        required: true,
    },
    status:{
        type: Boolean,
        required: true
    }

}, {
    timestamps: true,

});


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;