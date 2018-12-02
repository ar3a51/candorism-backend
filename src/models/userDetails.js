import mongoose from 'mongoose';

const userDetailsSchema = mongoose.Schema({
    username: "string",
    firstname: "string",
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

export const UserDetailsModel = mongoose.model("userDetails",userDetailsSchema);