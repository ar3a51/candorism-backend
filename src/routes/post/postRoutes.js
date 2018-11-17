import express from 'express';

import { UserModel }   from '../../models/users';
import { PostModel }   from '../../models/posts';

const postRoutes = express.Router();

postRoutes.get("/:id", async(req,res)=>{
   let result = await PostModel.findById(req.params.id);

   if (result)
    res.send(result);
   else
    res.sendStatus(404);
});

postRoutes.post("/", async(req,res)=>{
    let user = UserModel.findById(req.body.userid);
    if (user) {
        let postModel = new PostModel({
            user: {
                username: user.username,
                photoprofile: user.photoprofile,
            },
            message: req.body.message,
            datetime: new Date,
        });

        res.send(await postModel.save());
    }
    else
        res.sendStatus(404).send("User not found");
});

module.exports = postRoutes;