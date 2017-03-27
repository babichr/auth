import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

let userSchema = mongoose.Schema({
    login: {
        type:  String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('user', userSchema);