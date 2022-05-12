const { Post } = require('../models');

module.exports = async (req, res, next) => {
    let post = await Post.findByPk(req.params.id);

    if (!post) {
        return res.status(404).json({
            success: false,
            payload: null,
            msg: 'Post not found',
            error: null
        });
    }
    else {
        req.post = post;
        next();
    }
}
