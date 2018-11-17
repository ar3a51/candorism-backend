import mongoose from 'mongoose';
import express from 'express';

import userRoutes  from './routes/user/userRoutes';
import postRoutes from './routes/post/postRoutes';
import replyRoutes from './routes/post/replyRoutes';

const app = express();
const portNumber = 3030;



mongoose.connect("mongodb://localhost:27017/DevProject", {useNewUrlParser: true})
        .then(() => {
            console.log("DB Connected");
        })
        .catch((er) => {
            console.log(er);
        });

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("hello world");
});

app.use("/user",userRoutes);
app.use("/post", postRoutes);
app.use("/reply",replyRoutes);

app.listen(portNumber, ()=> {
    console.log(`Listening on port: ${portNumber}`);
});
