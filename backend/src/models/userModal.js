import mongoose from "mongoose";

const {
    Schema
} = mongoose;


const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
     },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    googleId: String // Google ile giriş yapan kullanıcılar için Google ID

}, {
    timestamps: true,

});


const User = mongoose.model('user', userSchema);

export default User;