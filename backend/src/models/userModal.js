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
    status: {
        type: Boolean,
        enum: [true, false],
        default: "true",
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    googleId: String // Google ile giriş yapan kullanıcılar için Google ID

}, {
    timestamps: true,

});


const User = mongoose.model('User', userSchema);

export default User;