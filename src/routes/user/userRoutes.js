import express from 'express';

import { UserServiceQuery }     from '../../services/userServices/userServiceQuery';
import { UserServiceCRUD}       from '../../services/userServices/userServiceCRUD';

const userRoutes = express.Router();

userRoutes.get("/:username", async(req, res) => {

    let userService = new UserServiceQuery();
    let result = await userService.getUserByUsername(req.params.username)
    if (result)
        res.send(result);
    else
        res.sendStatus(404);
});

userRoutes.post("/", async (req, res)=> {

    let user = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        address1: req.body.address1,
        address2: req.body.address2,
        suburb: req.body.suburb,
        postcode: req.body.postcode,
    }

    try {
        let userCrud = new UserServiceCRUD();
        let result = await userCrud.registerUser(user);
        res.send(result);
    } catch (ex) {

        res.sendStatus(500).send(ex);
    }
});

userRoutes.get("/userdetails/:id", async(req,res) => {

    try{
        let userQuery = new UserServiceQuery();

        let result = await userQuery.getUserDetailsById(req.params.id);

        return result;
    } catch (ex){
        res.sendStatus(500).send(ex);
    }

});

module.exports = userRoutes;
