const User = require("../models").user;
const Post = require("../models").post;

module.exports = {

    async getAllPostsOfUser(req, res) {
        try {

            const userCollection = await User.findOne({
                id: req.params.userId
            });
            if (userCollection) {
                const postCollection = await Post.findAll({
                    where: { userId: req.params.userId }
                })

                res.status(201).send(postCollection);
            }
            else {
                re.status(404).send("User Not Found")
            }
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

    async createPostByUser(req, res) {

        try {
            const userCollection = await User.findOne({
                id: req.params.userId
            });
            if (userCollection) {
                const post = await Post.create({
                    title: req.body.title,
                    userId: req.params.userId
                });
                res.status(201).send(post)
            }
            else {
                re.status(404).send("User Not Found")
            }

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async updatePostByUser(req, res) {
        try {
            const userCollection = await User.findOne({
                id: req.params.userId
            });

            if (userCollection) {

                const postCollection = await Post.findOne({
                    userId: req.params.userId
                })

                if (postCollection) {
                    const updatedPost = await postCollection.update({
                        title: req.body.title,
                        id: req.params.postId,
                        userId: req.params.userId
                    })

                    res.status(201).send(updatedPost);
                }
                else {
                    res.status(404).send("Post Not Found");
                }
            }
            else {
                re.status(404).send("User Not Found")
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },

    async deletePostByUser(req, res) {
        try {
            const userCollection = await User.findOne({
                id: req.params.userId
            });

            if (userCollection) {

                const deletedPost = await Post.findOne({
                    id: req.params.postId
                })

                if (deletedPost) {
                    deletedPost.destroy();
                    res.status(201).send("Deleted");
                }
                else {
                    res.status(404).send("Post Not Found");
                }
            }
            else {
                re.status(404).send("User Not Found")
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    }
}