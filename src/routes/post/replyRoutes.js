import express  from 'express';

import { ReplyModel }       from '../../models/replies';
import { UserModel  }               from '../../models/users';

const replyRoutes = express.Router();

replyRoutes.get("/:postid", async (req, res)=> {

    try {
    let replies = await ReplyModel.find(
    {
        post_id: req.params.post_id, 
        reply_to_id: { "$exists" : false },
    });

    if (replies.length > 0)
        res.send(replies);
    else
        res.sendStatus(404);
    } catch {
        res.sendStatus(500);
    }
});

replyRoutes.get("/:postid/:replyid", async(req,res)=> {

    try {
    let replies = await ReplyModel.find(
        {
            post_id: req.params.post_id, 
            reply_to_id: req.params.replyid
        });
    
    if (replies)
        res.send(replies);
    else
        res.sendStatus(404);
        
    } catch {
        res.sendStatus(500);
    }

});

replyRoutes.post("/", async(req,res)=>{

    let user = UserModel.findById(req.body.userid);

    if (user)
    {
        let replyModel = new ReplyModel({
             user: {
                 username: user.username,
                 photoprofile: user.photoprofile,
             },
             post_id: req.body.postid,
             reply_to_id: req.body.replytoid,
             message: req.body.message,
        });

        res.send(await replyModel.save());
    }
    else
        res.sendStatus(404).send("user not found");
})

module.exports = replyRoutes;