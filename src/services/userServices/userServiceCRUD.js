import { UserModel } from '../../models/users';
import { UserDetailsModel } from '../../models/userDetails';

import { UserServiceQuery }   from './userServiceQuery';

export class UserServiceCRUD {
    constructor(){}

    async registerUser(user) {

        let userDetailsModel = new UserDetailsModel({
            firstname: user.firstname,
            middlename: user.middlename,
            lastname: user.lastname,
            photoprofile: user.photoprofile,
            address1: user.address1,
            address2: user.address2,
            suburb: user.suburb,
            postcode: user.postcode
        });

        let userDetailsModelResult = await userDetailsModel.save();

        let userModel = new UserModel({
            userDetails_id: userDetailsModelResult._id,
            username: user.username,
            password: username.password,
        });

       let userModelResult = await userModel.save();

       return userModelResult;
    }

    async updatePassword(user){

        try {
            let userQuery = new UserServiceQuery();
            let user = await userQuery.getUserByUsername(user.username);
            
            user.set({password: user.password});
            await user.save();
        } catch(ex) {
            throw ex;
        }

    }

}