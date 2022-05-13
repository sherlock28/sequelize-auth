const { User } = require('../models');

module.exports = {
    viewPost(req, res, next) {
        if (req.user.id === req.post.user_id || User.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({
                success: false,
                payload: null,
                msg: 'You are not authorized to view this post',
                error: null
            });
        }
    }
}