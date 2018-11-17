import express from 'express';

import { UserModel } from '../../models/users';

const userRoutes = express.Router();

userRoutes.get("/:id", async(req, res) => {

    let result = await UserModel.findById(req.params.id)
    if (result)
        res.send(result);
    else
        res.sendStatus(404);
});

userRoutes.post("/", async (req, res)=> {
    let user = new UserModel({

        username: req.body.username,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        address1: req.body.address1,
        address2: req.body.address2,
        suburb: req.body.suburb,
        postcode: req.body.postcode,
    });

    res.send(await user.save());
});

module.exports = userRoutes;
