import express from 'express';

import {PostServiceCrud}       from '../../services/postServices/postCRUD';
import {PostQueryService}                      from '../../services/postServices/postQuery';
import { equal } from 'assert';

const postRoutes = express.Router();

postRoutes.get("/:id", async(req,res)=>{
 
    
   let postQuery = new PostQueryService();
   let result = await postQuery.getPostById(req.params.id);
   if (result)
    res.send(result);
   else
    res.sendStatus(404);
});

postRoutes.post("/", async(req,res)=>{
  
    try {
        let postCrud = new PostServiceCrud();
        let post = {
            username: req.body.username,
            message: req.body.message,
        }

        res.send(await postCrud.insertPost(post)); 
    } catch (ex) {
        res.sendStatus(500).send(ex);
    }
});

module.exports = postRoutes;