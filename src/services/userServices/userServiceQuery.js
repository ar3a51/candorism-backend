import { UserModel } from '../../models/users';
import { UserDetailsModel   }       from '../../models/userDetails';

export class UserServiceQuery {
    constructor (){}

   async getUserByUsername(user) {
        let result = await UserModel.find({"username": user.username});

        return result;
    }

   async getUserDetailsById(id) {
       let result = await UserDetailsModel.findById(id);

       return result;
   }
}