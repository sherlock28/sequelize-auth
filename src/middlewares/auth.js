const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { User } = require('../models')

module.exports = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).send({
            success: false,
            payload: null,
            msg: 'Access denied',
            error: null
        });
    }

    let token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).send({
            success: false,
            payload: null,
            msg: 'Access denied',
            error: null
        });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            res.status(400).send({
                success: false,
                payload: null,
                msg: 'Invalid token',
                error: null
            });
        } else {
            User.findByPk(decoded.user.id, { include: "roles" }).then(user => {
                if (user) {
                    req.user = user;
                }
                next();
            });
        }
    });
}
