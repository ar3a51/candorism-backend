import mongoose from 'mongoose';

let replySchema = mongoose.Schema({
    post_id: mongoose.Schema.Types.ObjectId,
    message: mongoose.Schema.Types.String,
    reply_to_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false, 
    },
    date: mongoose.Schema.Types.Date,
    user: {
        username: mongoose.Schema.Types.String,
        photoprofile: mongoose.Schema.Types.Buffer,
    }

})

export const ReplyModel = mongoose.model("replies",replySchema);