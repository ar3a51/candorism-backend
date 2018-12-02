import mongoose from 'mongoose';
import { ObjectID } from 'bson';

const userSchema = mongoose.Schema({
    userDetails_id: ObjectID,
    username: "string",
    password: "string",
});

export const UserModel = mongoose.model("users",userSchema);