import { PostModel }       from '../../models/posts';

export class PostServiceCrud {
    constructor(){}

    async insertPost(post)
    {
        try {
            let post = new PostModel({
                username: post.username,
                message: post.message,
                dateTime: new Date(),
            });

            return await post.save();
        } catch (ex){
            throw ex;
        }

    }

    async updatePost(post) {
        let currPost = await PostModel.findById(post.id);
        post.set({message: post.message});
        
        return await post.save();
    }
}