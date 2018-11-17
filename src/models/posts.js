import mongoose from 'mongoose';

let postsSchema = mongoose.Schema({
    user: { 
            username: "string",
            photoprofile: mongoose.Schema.Types.Buffer,
    },
    message: "string",
    dateTime: "Date",
});

export const PostModel = mongoose.model("Posts",postsSchema);