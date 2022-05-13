const { Post } = require('../models');

module.exports = {
    async index(req, res) {
        Post.findAll().then(posts => {
            return res.json({
                success: true,
                payload: posts,
                msg: 'Posts retrieved successfully',
                error: null
            });
        }).catch(err => {
            return res.status(500).json({
                success: false,
                payload: null,
                msg: 'Error on the server.',
                error: {
                    code: 500,
                    msg: 'Internal server error',
                    err: err,
                }
            });
        });
    },

    async createPost(req, res) {
        res.json({ msg: 'Create post' });
    },

    async showPost(req, res) {
        return res.json({
            success: true,
            payload: req.post,
            msg: 'Post retrieved successfully',
            error: null
        });
    },

    async updatePost(req, res) {
        req.post.title = req.body.title;
        req.post.body = req.body.body;

        post.save().then(post => {
            return res.json({
                success: true,
                payload: post,
                msg: 'Post updated successfully',
                error: null
            });
        });
    },

    async deletePost(req, res) {
        req.post.destroy().then(post => {
            return res.json({
                success: true,
                payload: post,
                msg: 'Post deleted successfully',
                error: null
            });
        });
    },
}