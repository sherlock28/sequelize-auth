const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {
    signIn(req, res) {

    },
    signUp(req, res) {
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);

        User.create({
            name: req.body.name,
            email: req.body.email,
            password
        }).then(user => {
            let token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            });
            res.json({
                success: true,
                payload: {
                    user,
                    token
                },
                msg: 'User created successfully',
                error: null
            });
        }).catch(err => {
            res.status(500).json({
                success: false,
                payload: null,
                msg: 'User not created',
                error: {
                    code: 500,
                    msg: 'Internal server error',
                    err: err,
                }
            });
        }
        );
    },
}
