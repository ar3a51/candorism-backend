import { UserModel } from '../../models/users';
import { UserDetailsModel   }       from '../../models/userDetails';

export class UserServiceQuery {
    constructor (){}

   async getUserByUsername(user) {
        return await UserModel.find({"username": user.username});
    }

   async getUserDetailsByUsername(user) {
      return await UserDetailsModel.find({"username":user.username});
   }
}