import { PostModel }                   from '../../models/posts';

import { UserServiceQuery }       from '../userServices/userServiceQuery';


export class PostQuery {

    userQuery = null;
    constructor() {
        this.userQuery = new UserServiceQuery();
    }

    async getPost(pageNumber) {
        try {
        
        let limit = 5;
        let results = [];
        let posts = await PostModel.find({}).limit(limit).skip((pageNumber - 1) * limit);

        for(let post of posts)
        {
            results.push({
                username: post.username,
                photo: this.userQuery.getUserDetailsByUsername(post.username).photoprofile,
                message: post.message,
                datetime: post.dateTime,
            });
        }

        return results;
        } catch (ex){
            throw ex;
        }
    }

    async getPostById(post) {
        try {
            return await PostModel.findById(post.id);
        } catch(ex){
            throw ex;
        }
    }
}