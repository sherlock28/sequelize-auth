const { Post } = require('../models');

module.exports = {
    index(req, res) {
        Post.findAll().then(posts => {
            return res.send({
                success: true,
                payload: posts,
                msg: 'Posts retrieved successfully',
                error: null
            });
        }).catch(err => {
            return res.status(500).send({
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
    async create(req, res) {
        res.json({msg: 'Create post'});
     },
}