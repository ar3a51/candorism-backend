import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: "string",
    firstname: "string",
    password: "string",
    middlename: {
        type: "string",
        required: false,
    },
    lastname: "string",
    photoprofile: "Buffer",
    address1: "string",
    address2: "string",
    suburb: "string",
    postcode: "string"
});

export const UserModel = mongoose.model("users",userSchema);