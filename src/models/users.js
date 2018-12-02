import mongoose from 'mongoose';
import { ObjectID } from 'bson';

const userSchema = mongoose.Schema({
    username: "string",
    password: "string",
});

export const UserModel = mongoose.model("users",userSchema);